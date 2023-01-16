// let route = "2234356";

// // write your code here
// let code = '2'
// let wall = ''

// for (j = 0; j < route.length; j++) {
//     for (i = 0; i < route.length; i++) {
//         // for (j = 0; j < route.length; j++) {
//         //     // wall = ''
//         if (code[0] === route[i]) {
//             wall += 'o'
//         } else {
//             wall += '#'
//         }

      
//     }
//     console.log(wall);
// }

let route = "2234356";

if(route.length<3) {
    console.log('Minimum character 3')
}else if(route.length > 14 ) {
    console.log('Maximum character 14')
}
// write your code here
for(let i=0; i<route.length; i++) {
    let output='|'
    let jalur = Number(route[i])
    for(let j=1; j<=6; j++) {
        if(jalur === j) {
            output += 'o'
        }else{output+='#'}
    }
    output += '|'
    console.log(output)

}
