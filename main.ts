// let researcher = Math.random() > 0.5
// ? "Rosalind Franklin"
// : 51;
// if (!(typeof researcher === "string")) {
//     console.log(researcher.toFixed);
//     ; // Ok: number
//     } else {
//     console.log(researcher.toUpperCase());
//      // Ok: string
//     }


// let biologist = Math.random() > 0.5 && "Rachel Carson";
// if (biologist) {
//     console.log(biologist);
//     ; // Type: string
// } else {
//     console.log(biologist);
//     // biologist; // Type: false | string
// }


// type TimeRange = {
//     start: Date;
//     };
//     const hasStartString: TimeRange = {
//     start: 
//     // Error: Type 'string' is not assignable to type 'Date'.
// //     };
// type PoemWithPages = {
//     name: string;
//     pages: number;
//     type: 'pages';
//     };
//     type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
//     type: 'rhymes';
//     };
//     type Poem = PoemWithPages | PoemWithRhymes;
//     const poem: Poem = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7, type: "pages" }
//     : { name: "Her Kind", rhymes: true, type: "rhymes" };
//     if (poem.type === "pages") {
//     console.log(`It's got pages: ${poem.pages}`); // Ok
//     } else {
//     console.log(`It rhymes: ${poem.rhymes}`);
//     }

// function singSongs(songs: string[]) {
//     for (const song of songs) {
//     console.log(`${song}`);
//     }
//     return songs.length;
//     }