using UnityEngine;
using System.Collections;

public class BulletSelfDestruct : MonoBehaviour {

	public float duration = 1f;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		// dopo un po il colpo deve sparire
		duration -= Time.deltaTime;
		if (duration <= 0) {
			Destroy(gameObject);
		}
	}
}
