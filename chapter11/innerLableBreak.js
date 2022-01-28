let i, j, k = 0; 
Outer_lable: for(i = 0; i < 5; i ++) 
{
	Inner_lable: for(j = 0; j < 5; j ++) 
	{
		k++;
		console.log(k); 
		if (j === 3)
			break Inner_lable; 

	} 

}



