
	var app = angular.module("bioApp", []);
	var id=0;
	
	app.controller("BioinformaticsController", function($scope) 
			{
		$scope.empArrays=[];
			$scope.save=function(emp)
			{
					var newEmp={};
					newEmp.myname=emp.myname;
					newEmp.email=emp.email;
					newEmp.number=emp.number;
					if (emp.id==null)
						{
					id=id+1;
					alert("null so incremented..."+id);
					newEmp.id=id;
					emp.id=emp.id;
					$scope.empArrays.push(newEmp);
						}
					else
						{
						alert("no new id generated");
						newEmp.id=emp.id;
						emp.id=emp.id;
						alert("current id is taken "+emp.id);
						// we should not push
						
						for (i in $scope.empArrays)
							{
								if ($scope.empArrays[i].id==emp.id)
									{
									alert("matching so going to update ");
									$scope.empArrays[i]=newEmp;
									}
							}
						}
					//alert(newEmp.name+" "+newEmp.email+" "+newEmp.number+" "+newEmp.id);
					alert("just before pushing...what is the id? "+newEmp.id);
					
					alert(" id is "+id);
					alert("Length of array is "+empArrays.length);
					alert("Function is working");
			}
			$scope.removeField=function()
			{
			x=confirm("Do you want to confirm");
			if(x)
			{
			$scope.empArrays.pop();
			}
			}
		$scope.editField=function(id1)
		{
			alert("You can edit "+id1);
			alert("Length of array in edit is "+$scope.empArrays.length);
			for (i in $scope.empArrays)
				{
					if ($scope.empArrays[i].id==id1)
						{
						alert("matching");
						//alert($scope.empArrays[i].name+" "+$scope.empArrays[i].email+" "+$scope.empArrays[i].id);
						$scope.employee=angular.copy($scope.empArrays[i]);
						}
				}
			}
		$scope.editContact = function (contact) {
	        $scope.model.selected = angular.copy(contact);
	    };

	    $scope.saveContact = function (idx) {
	        console.log("Saving contact");
	        $scope.model.contacts[idx] = angular.copy($scope.model.selected);
	        $scope.reset();
	    };
	
	});
