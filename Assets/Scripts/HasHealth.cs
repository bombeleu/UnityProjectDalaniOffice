using UnityEngine;
using System.Collections;

public class HasHealth : MonoBehaviour {

	public float HitPoints = 100f;
	
	public void ReceiveDamage( float amt ) {
		HitPoints -= amt;
		if (HitPoints <= 0) {
			Die();
		}
	}

	void Die() {
		Destroy (gameObject);
	}

}
