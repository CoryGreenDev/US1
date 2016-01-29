//Leave all comments.
//Created by Cory Green 1/29/16 | January 29th 2016
//HUD Bar control for health decrease and increase,
//You will most likley have to edit the code to actually get this to work with your assets. As mine are diffrent.

//--------------------------------------------------END OF COMMENTS-------------------------------------------------------------\\
#pragma strict

public var HP : int = 100;
public var Damage : int = 10;
var Exp : float = 0.00;
var Lvl : int = 1;


function OnGUI() {
  if(HP >= 100) {
    GUI.BeginGroup() {
      GUI.Box(Rect(0, 0, 20 ,150), "HealthBar");
      //This is most likley wrong due to the fact I can not check for errors.
      //Sorry for the inconvience.
    }
  }
}

function Update() {
  
    GUI.GetComponent.hitpoints.Text(HP);
      if(HP >= 100) {
        HP = 100;
     }
     //Horrible GUI system, needs work.
     GUI.GetComponent.level.Text(Lvl);
     GUI.GetComponent.exrp.Text(Exp);
}
