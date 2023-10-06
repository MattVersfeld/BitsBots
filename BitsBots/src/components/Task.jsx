import React from "react";


export default function Task() {

    /**
     * Created a function that uses higher order functions with no variables to create, fill and then map over the array
     * Using React li elements to display the bitsbots task on the webpage in an ordered list
     */
    function createArray1() {
        return Array(20).fill('').map((item, index) => {
            if ((index + 1) % 2 === 0 && (index + 1) % 3 === 0) {
                return <li>bitsbots</li>
            } else if ((index + 1) % 2 === 0) {
                return <li>bits</li>
            } else if ((index + 1) % 3 === 0) {
                return <li>bots</li>
            } else {
                return <li>0</li>
            }
        })
    }

    /**
    * Created a function that uses variables as well as a for loop to create and push 
    * li elements to an empty array, then using that stored array to display the elements
    * to the webpage using React
    */
    function createArray2() {
        let list = []
        const arrayLimit = 20
        const bits = <li>bits</li>
        const bots = <li>bots</li>
        const bitsBots = <li>bitsbots</li>
        const nothing = <li>0</li>

        for (let i = 0; i <= arrayLimit - 1; i++) {
            if ((i + 1) % 2 === 0 && (i + 1) % 3 === 0) {
                list.push(bitsBots)
            } else if ((i + 1) % 2 === 0) {
                list.push(bits)
            } else if ((i + 1) % 3 === 0) {
                list.push(bots)
            } else {
                list.push(nothing)
            }
        }
        return list
    }

    /**
    * Created a function that uses recursion to create an array of li elements, 
    * then using that stored array to display the elements to the webpage using React
    */
    function recur(x, array) {
        let list = array
        if (x >= 20) {
            return list
        }

        if ((x + 1) % 2 === 0 && (x + 1) % 3 === 0) {
            list.push(<li>bitsbots</li>)
        } else if ((x + 1) % 2 === 0) {
            list.push(<li>bits</li>)
        } else if ((x + 1) % 3 === 0) {
            list.push(<li>bots</li>)
        } else {
            list.push(<li>0</li>)
        }

        return recur(x + 1, list)
    }


    return (
        <div className="task-wrapper">
            <div>
                <h1>Without Variables</h1>
                <ol>
                    {createArray1()}
                </ol>
            </div>
            <div>
                <h1>With Variables</h1>
                <ol>
                    {createArray2()}
                </ol>
            </div>
            <div>
                <h1>With Recursion</h1>
                <ol>
                    {recur(0, [])}
                </ol>
            </div>
        </div>
    )
}

