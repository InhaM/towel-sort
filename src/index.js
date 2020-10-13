;
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let towelarr = [];
	
	if (!matrix)
	{
		return [];
	}
	
	for (let j = 0; j < matrix.length; j++)
	{
		if ( j % 2 == 1)
		{
			for (let i = matrix[j].length-1; 0 <= i;i--)
			{
				towelarr.push(matrix[j][i]);
			}			
		}
		if ( j % 2 == 0) 
		{
			
			for (let k = 0; k < matrix[j].length; k++)
			{
				towelarr.push(matrix[j][k]);
			}
		}

	}
	
  return towelarr;
}