let cycles = 0;

function clockwise(){
    let quadrant = parseFloat(document.getElementById("smallrect").getAttribute("quadrant"))%4;
    increaseQuadrant = parseFloat(parseFloat(quadrant)+parseFloat(1))%4;
    var returned_obstacleQuadrant = parseFloat(findObstacleQuadrant());
    if(increaseQuadrant == returned_obstacleQuadrant){
        increaseQuadrant++;
        if(cycles < 0) cycles = 0;
        cycles = cycles + 0.25;
    }
    changeQuadrant(quadrant,increaseQuadrant);
    if(cycles < 0) cycles = 0;
    cycles = cycles + 0.25;
    updateCycles(cycles);
}
function anticlockwise(){
    let quadrant = parseFloat(document.getElementById("smallrect").getAttribute("quadrant"))%4;
    decreaseQuadrant = parseFloat(parseFloat(quadrant)+parseFloat(3))%4;
    var returned_obstacleQuadrant = parseFloat(findObstacleQuadrant());
    if(decreaseQuadrant == returned_obstacleQuadrant){
        decreaseQuadrant--;
        cycles = cycles - 0.25;
    }
    changeQuadrant(quadrant,decreaseQuadrant);
    cycles = cycles - 0.25;
    updateCycles(cycles);
}
function changeQuadrant(quadrant,changeQuadrant){
    document.getElementById("smallrect").classList.remove("quadrant"+quadrant);
    document.getElementById("smallrect").classList.add("quadrant"+ changeQuadrant);
    document.getElementById("smallrect").setAttribute("quadrant", changeQuadrant);
}

function findObstacleQuadrant(){
    var outer_rect_coordinates = document.querySelector(".outer-rect").getBoundingClientRect();
    var obstacle_coordinates = document.querySelector(".obstacle").getBoundingClientRect();
    var xy;
    var obstacleQuadrant = null;
    xy = (parseFloat(obstacle_coordinates.x) <= (parseFloat(outer_rect_coordinates.x) + (parseFloat(outer_rect_coordinates.width)/parseFloat(2)))) ? 'left' : 'right';
    xy += (parseFloat(obstacle_coordinates.y) <= (parseFloat(outer_rect_coordinates.y) + (parseFloat(outer_rect_coordinates.height)/parseFloat(2)))) ? 'top' : 'bottom';
    switch(xy){
        case 'lefttop': obstacleQuadrant = 0; break;
        case 'leftbottom': obstacleQuadrant = 3; break;
        case 'righttop': obstacleQuadrant = 1; break;
        case 'rightbottom': obstacleQuadrant = 2; break;
    }
    return obstacleQuadrant;
}

function updateCycles(cycleCount){
    document.getElementById("cycles").innerText = (cycleCount < 1) ?  0 : Math.trunc(cycleCount) ;
}