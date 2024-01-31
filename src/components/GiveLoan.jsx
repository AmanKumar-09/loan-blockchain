import React, { useState } from "react";


const GiveLoan = ({  instance }) => {
	const [formData, setFormData] = useState({
		address: "",
		LoanName: "",
	});
	const [spendPromise, setSpendPromise] = useState(null);

	let aci = [
  {
    "namespace": {
      "name": "ListInternal",
      "typedefs": []
    }
  },
  {
    "namespace": {
      "name": "List",
      "typedefs": []
    }
  },
  {
    "namespace": {
      "name": "String",
      "typedefs": []
    }
  },
  {
    "contract": {
      "functions": [
        {
          "arguments": [],
          "name": "init",
          "payable": false,
          "returns": "LoanSystem.state",
          "stateful": true
        },
        {
          "arguments": [
            {
              "name": "loanName",
              "type": "string"
            },
            {
              "name": "shortMessage",
              "type": "string"
            },
            {
              "name": "amount",
              "type": "int"
            },
            {
              "name": "period",
              "type": "string"
            }
          ],
          "name": "addLoan",
          "payable": false,
          "returns": {
            "tuple": []
          },
          "stateful": true
        },
        {
          "arguments": [
            {
              "name": "loanUser",
              "type": "address"
            },
            {
              "name": "loanName",
              "type": "string"
            }
          ],
          "name": "giveLoan",
          "payable": true,
          "returns": {
            "tuple": []
          },
          "stateful": true
        },
        {
          "arguments": [],
          "name": "getInformationAboutLoan",
          "payable": false,
          "returns": {
            "option": [
              "LoanSystem.loan"
            ]
          },
          "stateful": false
        },
        {
          "arguments": [
            {
              "name": "loanGiver",
              "type": "address"
            }
          ],
          "name": "loanRepay",
          "payable": true,
          "returns": {
            "tuple": []
          },
          "stateful": true
        },
        {
          "arguments": [
            {
              "name": "loanUser",
              "type": "address"
            }
          ],
          "name": "checkForLoanRepay",
          "payable": false,
          "returns": "bool",
          "stateful": false
        }
      ],
      "kind": "contract_main",
      "name": "LoanSystem",
      "payable": false,
      "state": {
        "record": [
          {
            "name": "loans",
            "type": {
              "map": [
                "address",
                "LoanSystem.loan"
              ]
            }
          }
        ]
      },
      "typedefs": [
        {
          "name": "loan",
          "typedef": {
            "record": [
              {
                "name": "loanUser",
                "type": "address"
              },
              {
                "name": "loanGiver",
                "type": "address"
              },
              {
                "name": "amount",
                "type": "int"
              },
              {
                "name": "isRepaid",
                "type": "bool"
              },
              {
                "name": "loanName",
                "type": "string"
              },
              {
                "name": "shortMessage",
                "type": "string"
              },
              {
                "name": "isGranted",
                "type": "bool"
              },
              {
                "name": "loanPeriod",
                "type": "string"
              }
            ]
          },
          "vars": []
        }
      ]
    }
  }
];


	let bytecode = "cb_+QMARgOg0KK2HhYhkEaa1t/oi185+53D1gpaZqDVvjDeohqXSSTAuQLSuQJg/gSGxYEANwR3dwd3NwBVAFUADAEEDAN/DAEADAECDAN/DAEGJwwQDwIEVQAtioKCBAEDP/4IqPzMBDcCRwB3NwAaCgCCLxiCAAcMEAwDr4IAAQA/DwIECD4EDgRGOgYEACgsCAYgEAIHDAj7A4lMb2FuIGluZm8gbm90IGZvdW5kIHdpdGggdGhhdCBuYW1lKCwMBiYABwwM+wNdTG9hbiBpcyBhbHJlYWR5IGdyYW50ZWQoLAQGZQEAKe4SDAb/VQIUKa4WAhIULZqCggAWAQM/+wNNTm8gbG9hbiBpbmZvcm1hdGlvbisYAABE/CMAAgICDwIECD4EDgT+EViOCQA3AIcCNwA3ATcIRwBHAAcXd3cXd1UCABoKAoIvKIIABwwEAQOvggABAD8rKAIARPwjAAICAgD+RNZEHwA3ADcAGg6CLwABAz/+t2ApSQA3AUcAFxoKAIIvGIIABwwIDAOvggABAD8PAgQIPgQGBEY6BgQAKCwGBgD7A01ObyBMb2FuIGluZm9ybWF0aW9uKxgAAET8IwACAgIPAgQIPgQGBP7KqJF5BDcBRwA3AFUCABoKAoIvKIIABwwQDAOvggABAD8PAgYIPgYOBEY6CAYAKCwMCAcMCPsDhUxvYW4gaXMgbm90IEdyYW50ZWQsIENhbm5vdCBSZXBheSgsBggmAAcMDPsDVSBMb2FuIGlzIEFscmVhZHkgUGFpZCgsBAgoLAIIZQAp7hQGCP9VAC2KgoIUAQM/+wNNTm8gbG9hbiBpbmZvcm1hdGlvbisoAgBE/CMAAgICDwIGCD4GDgS4ai8GEQSGxYEdYWRkTG9hbhEIqPzMIWdpdmVMb2FuERFYjgldZ2V0SW5mb3JtYXRpb25BYm91dExvYW4RRNZEHxFpbml0EbdgKUlFY2hlY2tGb3JMb2FuUmVwYXkRyqiReSVsb2FuUmVwYXmCLwCFNy40LjAAfsebqg=="

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: name === "rent" ? (value ? parseInt(value, 10) : "") : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData.name);
		console.log(formData.rent);
		console.log(formData.address);

		console.log(instance);
		const contract = await instance.initializeContract({ aci, bytecode, address: "ct_2JrXYr2GSndcuL6G1QswzniT92wmfWM8JuBY8BycW3EykZzH8b	" })
		const options1 = {
			amount: 0,
			callData: "",
			fee: null,
			gas: null,
			gasPrice: 1000000000,
		};
		const args = [formData.name,formData.rent,formData.address];
		const options = Object.fromEntries(
			Object.entries(options1).filter(([, v]) => v != null),
		);
  
		contract
			?.$call("giveLoan",args, options)
			.then((result) => {
				console.log(result);
				setSpendPromise(result.hash)
				
				
				console.log(result);
				
				
				
  
			});
	};

	return (
		<div className="h-screen rounded-xl mx-4">
			<form
				onSubmit={handleSubmit}
				className="max-w-[400px] w-full bg-gray-400 p-8 px-8 rounded-xl shadow-2xl border border-gray-400"
			>
				<h2 className="text-4xl text-white font-bold text-center mb-4">
					Give Loan
				</h2>
				<div className="flex flex-col text-black-400 py-2">
					<label>Enter the adrress to whom you want to fund:</label>
					<input
						className="p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
						type="text"
						name="addess"
						value={formData.address}
						onChange={handleInputChange}
						placeholder="Enter address"
					/>
				</div>
				<div className="flex flex-col text-black-400 py-2">
					<label>Enter Loan Name:</label>
					<input
						className="p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
						type="text"
						name="LoanName"
						value={formData.LoanName}
						onChange={handleInputChange}
						required
						placeholder="Enter Loan Name "
					/>
				</div>
		
				<button
					type="submit"
					className="w-full my-5 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
				>
					Approve and give the funds
				</button>
				{spendPromise && (
        <div className="mt-4">
          <div className="font-bold text-lg mb-2">Spend result</div>
          <p className="text-gray-700">{spendPromise}</p>
        </div>
      )}
			</form>
		</div>
	);
};

export default GiveLoan;
