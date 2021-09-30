import React,{useState} from 'react';
import {useInterval} from './util';
import './Board.css';
const BOARD_SIZE = 10;
const initialCellsNodes = [[6,15,26,35,36], [10,11,30,31,32],
                        [18,23,38,43,58,59], [26,27,34,47,48],
                        [78,77,84,97], [56,65,76,85,96,95]];

const initCells = [6,10,18,26,78,56];

const initialCells = [6,15,26,35,36, 10,11,30,31,32,
                      18,23,38,43,58,59, 26,27,34,47,48,
                      78,77,84,97, 56,65,76,85,96,95];
const ladderCells = [3,14];

class LinkedList{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

const addnode = (value)=>{

    var node = new LinkedList(value);

    if(this.head == null){
        this.head=node;
    }else{
        var current = this.head;

        while(current.next){
            current=current.next;
        }
        current.next = node;
    }
}


const Board = () => {

    const [board, setboard] = useState(createBoard(BOARD_SIZE));
    const [playerCell,setplayerCell] = useState(1);
    const [initset,setInitSet] = useState(new Set(initCells));
    const [ladderset,setladderSet] = useState(new Set(ladderCells));
    // const [snakelinkedlist,setsnakelinkedlist] = useState(makeSnakeLinkedList());
    const moveforward =()=>{
        setplayerCell(playerCell+1);
    }

    useInterval(()=>{
        moveforward();
    },1000);
    

    // const makeSnakeLinkedList = ()=>{
    //     const ListOfLinkedList = [];
    //     for(let i=0;i<initialCellsNodes.length;i++){
    //         for(let j=0;j<initialCellsNodes[0].length;j++){
    //             if(j==0){
    //                 const newNode = new LinkedList(initialCellsNodes[i][j]);
    //             }
    //             else{
    //                 newNode.addnode(initialCellsNodes[i][j]);
    //             }
    //         }
    //         ListOfLinkedList.push(newNode);
    //     }
    //     return ListOfLinkedList;
    // }


    return (
        <>
            <div className="board">
                {board.map((row,rowIdx)=>(
                    <div key={rowIdx} className="row">
                        {row.map((cell,cellIdx)=>{
                            const className = getClassName(
                                cell,
                                playerCell,
                                initset,
                                ladderset
                            );
                            return <div key={cellIdx} className={className}>{cell}</div>;
                        })}
                    </div>
                ))}
            </div>
            <div className="btn">
                <button>click me</button>
            </div>
        </>
    );
};

const createBoard = (BOARD_SIZE) =>{
    let counter=100;
    let isLeftToRight = true;
    const board = [];

    for(let i=0;i<1;i++){
        const countrow = [];
        for(let rowc=BOARD_SIZE-1;rowc>=0;rowc--){
            countrow.push(counter--);
        }
        board.push(countrow);
    }

    for(let row=BOARD_SIZE-1;row>0;row--){
        const countrow=[];
        if(isLeftToRight){
            counter=counter-9;
            for(let col=0;col<BOARD_SIZE;col++){
                countrow.push(counter++);
            }
            isLeftToRight=false;
        }
        else if(!isLeftToRight){
            counter=counter-11;
            for(let col=0;col<BOARD_SIZE;col++){
                countrow.push(counter--);
            }
            isLeftToRight=true;
        }
        board.push(countrow);
    }
    return board;
}

const getClassName = (
        cell,
        playerCell,
        snakeCell,
        ladderCell,
)=>{
    let className ='cell';
    if(cell === playerCell) className ='cell cell-orange';
    else if(snakeCell.has(cell)) className ='cell cell-red';
    else if(ladderCell.has(cell)) className ='cell cell-green';

    return className;
}


export default Board
