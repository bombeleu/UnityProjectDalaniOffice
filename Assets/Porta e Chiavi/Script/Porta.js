//Script Playdomy
var Aperta : boolean = false;
 
var Sbloccata : boolean = false;
 
var NecessitaDiChiave : boolean = true;

var Chiusa : AudioClip;
 
var Apri : AudioClip;
 

var Volume : float = 0.5;
 
var ScriptChiave : GameObject;
 
 
 
 
function Start () {
audio.volume = Volume;
}
 
function Update () {

//Se la porta è sbloccata e premeremo il tasto "E" quando è Chiusa eseguirà l'azione di apertura (59:1) 
if(Input.GetKeyUp(KeyCode.E) && !Aperta && Sbloccata && !NecessitaDiChiave)
 
{
        Opening();
        Aperta = true;
        audio.clip = Apri;
       
        audio.Play();
}
//Se la porta è sbloccata e premeremo il tasto "E" quando è aperta eseguirà l'azione di chiusura (69:1)
else if(Input.GetKeyUp(KeyCode.E) && Aperta && Sbloccata && !NecessitaDiChiave)
 
{
        Closing();
        Aperta = false;
}
//Se la porta è bloccata e necessita di chiave eseguirà solo il suono Chiusa 
else if(Input.GetKeyUp(KeyCode.E) && Sbloccata && NecessitaDiChiave)
 
{
        audio.clip = Chiusa;
       
        audio.Play();
}
//Se Nello Script chiave "Hai la chiave" diventa vero,allora Necessita di chiave diventa falso 
if(ScriptChiave.GetComponent(Chiave).HaiChiave == true)
{
        NecessitaDiChiave = false;
}
 
}
 
 
//Movimento all'apertura della porta 
function Opening()
{
for (var i = 0; i < 100; i++)
{
    transform.Rotate(0,0.9,0);
   
    yield WaitForSeconds(0.01);
        }
}
//Movimento alla chiusura della porta 
function Closing()
{
for (var i = 0; i < 100; i++)
{
    transform.Rotate(0,-0.9,0);
   
    yield WaitForSeconds(0.01);
    audio.clip = Apri;
       
        audio.Play();
        }
}
//la funzione viene attivata se il giocatore con il Tag "Player" entra nel trigger 
function OnTriggerEnter (other : Collider)
{
        if(other.gameObject.tag == "Player")
        {
                Sbloccata = true;
        }
}
//la funzione viene disattivata se il giocatore con il Tag "Player" esce dal trigger 
function OnTriggerExit (other : Collider)
{
        if(other.gameObject.tag == "Player")
        {
                Sbloccata = false;
        }
}
 
 
 
 
//Quando si importa questo script insieme ad esso inserisci il componente AudioSource  
@script RequireComponent(AudioSource)
