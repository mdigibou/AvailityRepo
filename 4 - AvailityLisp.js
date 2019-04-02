var newThing = function(x)
{ 
	if(typeof x !== "string") 
		return false; 
	var stringArray = x.split("");
	var openCounter = 0;
	for(var q = 0; q< stringArray.length; q++)
	{
		if(stringArray[q] == '(')
        	{			
			openCounter++;			
        	}
		else if (stringArray[q] == ')')
        	{			
			if(openCounter <= 0)
				return false;
			else
				openCounter--;
       	 	}			
    	}
	if(openCounter == 0)
		return true;
	else
		return false;	
}
