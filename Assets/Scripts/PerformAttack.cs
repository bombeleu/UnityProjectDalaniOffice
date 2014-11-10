using UnityEngine;
using System.Collections;

public class PerformAttack : MonoBehaviour {

	public float range = 100.0f;

	// rateo di colpi espresso in secondi
	public float cooldown = 0.2f; // la f serve per evitare cast del float in altri tipi
	float cooldownRemaining = 0; // when is 0 we can fire

	public GameObject debrisPrefab;

	public float damage = 50f;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		cooldownRemaining -= Time.deltaTime; // ogni volta che spariamo riduciamo il cooldown
		if (Input.GetMouseButton (0) && cooldownRemaining <= 0 ) { // 0 is the left mouse button
			cooldownRemaining = cooldown; // reset del cooldown
			// metodo più comune
			Ray ray = new Ray( Camera.main.transform.position, Camera.main.transform.forward );
			RaycastHit hitInfo; // info su quello che abbiamo colpito


			if( Physics.Raycast(ray, out hitInfo, range) ) {
				Vector3 hitPoint = hitInfo.point;
				GameObject go =  hitInfo.collider.gameObject;
				Debug.Log ("Hit Oblect: " + go.name);
				Debug.Log ("Hit Point: " + hitPoint);

				HasHealth h = go.GetComponent<HasHealth>();
				if( h != null) {
					h.ReceiveDamage(damage);
				}

				// controlliamo di avere il prefab (visual feedback)
				if( debrisPrefab != null ) {
					Instantiate( debrisPrefab, hitPoint, Quaternion.identity );
				}
			}
		}
	}
}
