import { Excel } from './components/excel/Excel'
import { Header } from './components/header/Header'
import { Toolbar } from './components/toolbar/Toolbar'
import { Formula } from './components/formula/Formula'
import { Table } from './components/table/Table'
import './scss/index.scss'


const excel = new Excel('#app', {
    components:[Header, Toolbar, Formula, Table]
})
excel.render()

// (function() {
//     var a = b = 5;
//    })();
   
//    console.log(b
//     );
// const man = {
//     name: 'Bill',
//     sayHello(greeting) {
//       console.log(greeting + ' ' + this.name);
//     }
//    };
//    man.sayHello.bind({name: "Joe"}, "Hi")
// man.sayHello.bind({name: "Joe"}, ["Hi"])
//   man.sayHello.apply({name: "Joe"}, "Hi")
    // man.sayHello.call({name: "Joe"}, "Hi");
//    man.sayHello('Hello');
  
// const trap = (height) => {
 
//     //at least three elements to trap rain drops
//      if(height.length < 3) return 0
//      // left max, right max
//      const maxHeightLeft = height.slice()
//      console.log(maxHeightLeft)
     
//      const maxHeightRight = height.slice()
     
//      //start from left
//      for(let i = 1; i < height.length; i++){
//         // console.log(maxHeightLeft[i])
//        //find the max of left
//        if(maxHeightLeft[i] < maxHeightLeft[i - 1])
//            maxHeightLeft[i] = maxHeightLeft[i - 1]
//            console.log(maxHeightLeft[i])
//      }
     
//     //the same with the left
//      for (let i = height.length - 2; i >= 0; i--) {
//        if(maxHeightRight[i] < maxHeightRight[i + 1])
//          maxHeightRight[i] = maxHeightRight[i + 1]
//      }
//     // calculate the drop counts 
//      return height.reduce(
//        (acc, cur, idx) =>
//          acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur,
//        0
//      )
//    }


//    console.log(trap([1,2,1,2]))
   
