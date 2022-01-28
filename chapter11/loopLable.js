let k = 0; 
Outter_loop: for(i = 0; i < 5; i++) 
{
	Inner_loop: for(j = 0; j<5; j++) 
	{
               k++; 
	       console.log(k); 
	 if (k === 2) 
		break Outter_loop;

	} 

}


// in The above program we use lables with for loop. 
