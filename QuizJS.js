
visaAntalRatt="ja";
text=new Array("Antal korrekta svar","Av antal","Procentsats");

function ratta()
{
antalRatt=0;
i=1;
	while (typeof(eval("document.fragefalt.svar"+i)) == "object")
	{
		for (j=0; j<eval("document.fragefalt.svar"+i+".length"); j++)
		{
			if (eval("document.fragefalt.svar"+i+"["+j+"].checked") && eval("document.fragefalt.svar"+i+"["+j+"].value") == "true")
			{
				antalRatt++;
				break;
			}
		}
	i++;
	}
	i--;

	if (visaAntalRatt=="ja")
	{
		alert(text[0]+": "+antalRatt+"\n"+text[1]+": "+i+"\n"+text[2]+": "+Math.round(antalRatt/i*100)+"%")
	}
}