// imports


// constants
const ocean: string = "#00BFFF";


// map canvas element
const canvas = document.getElementById(
    'map'
) as HTMLCanvasElement | null;

// Generate map
async function LoadMap(): Promise<void> {

}

function LoadDisplay(): void {
    // set background
    canvas?.setAttribute("style", `background-color: ${ocean};`);

}






