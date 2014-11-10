//Script Playdomy
var Lunghezza : float = 3;
static var HaiChiave : boolean = false;
var MostraTesto : boolean = false;
//In questa varibile andremo a dire quale sarà il testo che comparirà quando prenderemo la chiave 
var Testo : String = "Hai ottenuto la chiave";
var Altro : GameObject;

function Update () {
//Si va a richiamare il Raycast
var hit : RaycastHit;
	
var ray : Ray = camera.ViewportPointToRay (Vector3(0.5,0.5,0));
	
var fwd = transform.TransformDirection (Vector3.forward);

Debug.DrawRay(transform.position, fwd * Lunghezza, Color.green); 
	
	if(Physics.Raycast(ray, hit, Lunghezza))

	{	
		
		hitObject = hit.collider.gameObject;
		//Debug.Log(hitObject.name);
		//Il gameobject dovrà avere la tag "Chiave"
		if(hitObject.gameObject.tag == "Chiave")

			{
		
				Altro.GetComponent(Crosshair).TextureChange();
		//Tasto e con qui avverrà la funzione Getkey
				if(Input.GetKeyUp(KeyCode.E))
				{
			
					GetKey();
					Destroy(hitObject);
					
			
				}
				
				
			}
		
			else if(hitObject.gameObject.tag == "Untagged")
		
			{
				Altro.GetComponent(Crosshair).BackToNormal();
			}

		}
	
	else if(!Physics.Raycast(transform.position, transform.forward, hit, Lunghezza))
	{
		Altro.GetComponent(Crosshair).BackToNormal();
	}
	
	

}
//La funzione che andrà a fare quando prenderemo la chiave
function GetKey(){

	HaiChiave = true;

	MostraTesto = true;
	//Mostra testo per 3 secondi
	yield WaitForSeconds(3);
	
	MostraTesto = false;
}

function OnGUI(){
//Cordinate di dove dovrà apparire la scritta
if(MostraTesto)
{//Il testo che vedremo e quello che troviamo nella variabile Testo
	GUI.Label(Rect(Screen.width /2 -62.5, Screen.height /2 + 50, 200, 100), Testo);
}

}