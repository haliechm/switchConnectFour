(function(doc){
    
    
    var currentCol = 1;
    var playerYellow = true;
    var numFilled = 0;
    var human = true;
    var easy = true;
    var notBeenFoundVertical=[];
    var notBeenFoundVerticalOwn = [];
    
window.onload = function() {
    console.log("Window loaded");
    highlightFirstArrow();
    
     for (var i = 0; i < 20; i++) {
      notBeenFoundVertical[i] = true;
        notBeenFoundVerticalOwn[i] = true;
    }
}

function computerAIEasy() {
    
    var notFoundYet = true;
    currentCol = Math.ceil(Math.random() * 7);
    // choose random column for computer
    if (foundThreeVerticalOwn()) {
        
    } else if (foundThreeVerticalOpp()) {
        // found opponentThree vertical 3 in a row
    } else if(foundThreeHorizontalOpp()) {
              
    } else {
    while(notFoundYet) {
        if(testClass(1, currentCol, '')) {
            notFoundYet=false;
        } else {
            currentCol = Math.ceil(Math.random() * 7);
        }
    }
    }
    
    console.log("in ai - col: " + currentCol);
    chooseArrow();

    return;
}
    
    function foundThreeHorizontalOpp() {
    // row, col
    
    // row 6
      if(testClass(6, 4, "")  && testClass(6, 1, players[(current+1)%2])  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 3, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(6, 1, "")  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])) {
        currentCol = 1;
        return true;
                    
        }
    
      if(testClass(6, 5, "")  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(6, 2, "")  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
     if(testClass(6, 6, "")  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
     if(testClass(6, 3, "")  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])  && testClass(6, 6, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
      if(testClass(6, 7, "")  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])  && testClass(6, 6, players[(current+1)%2])) {
        currentCol = 7;
        return true;
                    
        }
    
      if(testClass(6, 4, "")  && testClass(6, 5, players[(current+1)%2])  && testClass(6, 6, players[(current+1)%2])  && testClass(6, 7, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(6, 2, "")  && testClass(6, 1, players[(current+1)%2])  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
      if(testClass(6, 3, "")  && testClass(6, 1, players[(current+1)%2])  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(6, 3, "")  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(6, 4, "")  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(6, 5, "")  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 6, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(6, 4, "")  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])  && testClass(6, 6, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(6, 6, "")  && testClass(6, 4, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])  && testClass(6, 7, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
      if(testClass(6, 4, "")  && testClass(6, 2, players[(current+1)%2])  && testClass(6, 3, players[(current+1)%2])  && testClass(6, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    // row 5
    
     if(testClass(5, 4, "")  && testClass(5, 1, players[(current+1)%2])  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 3, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(5, 1, "")  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])) {
        currentCol = 1;
        return true;
                    
        }
    
      if(testClass(5, 5, "")  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(5, 2, "")  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
     if(testClass(5, 6, "")  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
     if(testClass(5, 3, "")  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])  && testClass(5, 6, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
      if(testClass(5, 7, "")  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])  && testClass(5, 6, players[(current+1)%2])) {
        currentCol = 7;
        return true;
                    
        }
    
      if(testClass(5, 4, "")  && testClass(5, 5, players[(current+1)%2])  && testClass(5, 6, players[(current+1)%2])  && testClass(5, 7, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    // 
    if(testClass(5, 2, "")  && testClass(5, 1, players[(current+1)%2])  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
      if(testClass(5, 3, "")  && testClass(5, 1, players[(current+1)%2])  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(5, 3, "")  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(5, 4, "")  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(5, 5, "")  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 6, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(5, 4, "")  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])  && testClass(5, 6, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(5, 6, "")  && testClass(5, 4, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])  && testClass(5, 7, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
      if(testClass(5, 4, "")  && testClass(5, 2, players[(current+1)%2])  && testClass(5, 3, players[(current+1)%2])  && testClass(5, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
    
    // row 4
    
        if(testClass(4, 4, "")  && testClass(4, 1, players[(current+1)%2])  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 3, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(4, 1, "")  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])) {
        currentCol = 1;
        return true;
                    
        }
    
      if(testClass(4, 5, "")  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(4, 2, "")  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
     if(testClass(4, 6, "")  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
     if(testClass(4, 3, "")  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])  && testClass(4, 6, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
      if(testClass(4, 7, "")  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])  && testClass(4, 6, players[(current+1)%2])) {
        currentCol = 7;
        return true;
                    
        }
    
      if(testClass(4, 4, "")  && testClass(4, 5, players[(current+1)%2])  && testClass(4, 6, players[(current+1)%2])  && testClass(4, 7, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    //
    if(testClass(4, 2, "")  && testClass(4, 1, players[(current+1)%2])  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
      if(testClass(4, 3, "")  && testClass(4, 1, players[(current+1)%2])  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(4, 3, "")  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(4, 4, "")  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(4, 5, "")  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 6, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(4, 4, "")  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])  && testClass(4, 6, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(4, 6, "")  && testClass(4, 4, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])  && testClass(4, 7, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
      if(testClass(4, 4, "")  && testClass(4, 2, players[(current+1)%2])  && testClass(4, 3, players[(current+1)%2])  && testClass(4, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
    
    // row 3
    
          if(testClass(3, 4, "")  && testClass(3, 1, players[(current+1)%2])  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 3, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(3, 1, "")  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])) {
        currentCol = 1;
        return true;
                    
        }
    
      if(testClass(3, 5, "")  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(3, 2, "")  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
     if(testClass(3, 6, "")  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
     if(testClass(3, 3, "")  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])  && testClass(3, 6, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
      if(testClass(3, 7, "")  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])  && testClass(3, 6, players[(current+1)%2])) {
        currentCol = 7;
        return true;
                    
        }
    
      if(testClass(3, 4, "")  && testClass(3, 5, players[(current+1)%2])  && testClass(3, 6, players[(current+1)%2])  && testClass(3, 7, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    //
    if(testClass(3, 2, "")  && testClass(3, 1, players[(current+1)%2])  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
      if(testClass(3, 3, "")  && testClass(3, 1, players[(current+1)%2])  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(3, 3, "")  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(3, 4, "")  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(3, 5, "")  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 6, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(3, 4, "")  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])  && testClass(3, 6, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(3, 6, "")  && testClass(3, 4, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])  && testClass(3, 7, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
      if(testClass(3, 4, "")  && testClass(3, 2, players[(current+1)%2])  && testClass(3, 3, players[(current+1)%2])  && testClass(3, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
    // row 2
    
          if(testClass(2, 4, "")  && testClass(2, 1, players[(current+1)%2])  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 3, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(2, 1, "")  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])) {
        currentCol = 1;
        return true;
                    
        }
    
      if(testClass(2, 5, "")  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(2, 2, "")  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
     if(testClass(2, 6, "")  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
     if(testClass(2, 3, "")  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])  && testClass(2, 6, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
      if(testClass(2, 7, "")  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])  && testClass(2, 6, players[(current+1)%2])) {
        currentCol = 7;
        return true;
                    
        }
    
      if(testClass(2, 4, "")  && testClass(2, 5, players[(current+1)%2])  && testClass(2, 6, players[(current+1)%2])  && testClass(2, 7, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    //
    if(testClass(2, 2, "")  && testClass(2, 1, players[(current+1)%2])  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
      if(testClass(2, 3, "")  && testClass(2, 1, players[(current+1)%2])  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(2, 3, "")  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(2, 4, "")  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(2, 5, "")  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 6, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(2, 4, "")  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])  && testClass(2, 6, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(2, 6, "")  && testClass(2, 4, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])  && testClass(2, 7, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
      if(testClass(2, 4, "")  && testClass(2, 2, players[(current+1)%2])  && testClass(2, 3, players[(current+1)%2])  && testClass(2, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
    
    // row 1
             if(testClass(1, 4, "")  && testClass(1, 1, players[(current+1)%2])  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 3, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(1, 1, "")  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])) {
        currentCol = 1;
        return true;
                    
        }
    
      if(testClass(1, 5, "")  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(1, 2, "")  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
     if(testClass(1, 6, "")  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
     if(testClass(1, 3, "")  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])  && testClass(1, 6, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
      if(testClass(1, 7, "")  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])  && testClass(1, 6, players[(current+1)%2])) {
        currentCol = 7;
        return true;
                    
        }
    
      if(testClass(1, 4, "")  && testClass(1, 5, players[(current+1)%2])  && testClass(1, 6, players[(current+1)%2])  && testClass(1, 7, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    //
    if(testClass(1, 2, "")  && testClass(1, 1, players[(current+1)%2])  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])) {
        currentCol = 2;
        return true;
                    
        }
    
      if(testClass(1, 3, "")  && testClass(1, 1, players[(current+1)%2])  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(1, 3, "")  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])) {
        currentCol = 3;
        return true;
                    
        }
    
        if(testClass(1, 4, "")  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
      if(testClass(1, 5, "")  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 6, players[(current+1)%2])) {
        currentCol = 5;
        return true;
                    
        }
    
      if(testClass(1, 4, "")  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])  && testClass(1, 6, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
    
      if(testClass(1, 6, "")  && testClass(1, 4, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])  && testClass(1, 7, players[(current+1)%2])) {
        currentCol = 6;
        return true;
                    
        }
    
      if(testClass(1, 4, "")  && testClass(1, 2, players[(current+1)%2])  && testClass(1, 3, players[(current+1)%2])  && testClass(1, 5, players[(current+1)%2])) {
        currentCol = 4;
        return true;
                    
        }
    
  
    
    return false;
}
    
    function foundThreeVerticalOwn() {
    if(testClass(3, 1, "") && notBeenFoundVerticalOwn[0] && testClass(6, 1, players[current]) && testClass(5, 1, players[current]) && testClass(4, 1, players[current])) {
        console.log("1");
        currentCol = 1;
                    
        // now this one has already been found
        notBeenFoundVerticalOwn[0] = false;
        return true;
                    
                    
                }
//    
     if(testClass(2, 1, "") && notBeenFoundVerticalOwn[1] && testClass(5, 1, players[current]) && testClass(4, 1, players[current]) && testClass(3, 1, players[current])) {
        console.log("2");
                            notBeenFoundVerticalOwn[1] = false;
        currentCol = 1;
        return true;
    }
    
     if(testClass(1, 1, "") && notBeenFoundVerticalOwn[2] && testClass(4, 1, players[current]) && testClass(3, 1, players[current]) && testClass(2, 1, players[current])) {
                    notBeenFoundVerticalOwn[2] = false;
        console.log("3");
        currentCol = 1;
        return true;
    }
//    
//    
       if(testClass(3, 2, "") && notBeenFoundVerticalOwn[3] && testClass(6, 2, players[current]) && testClass(5, 2, players[current]) && testClass(4, 2, players[current])) 
    
    {
                   notBeenFoundVerticalOwn[3] = false;
        console.log("4");
        currentCol = 2;
        return true;
    }
    
     if(testClass(2, 2, "") && notBeenFoundVerticalOwn[4] && testClass(5, 2, players[current]) && testClass(4, 2, players[current]) && testClass(3, 2, players[current])) {
                 notBeenFoundVerticalOwn[4] = false;
        console.log("5");
        currentCol = 2;
        return true;
    }
    
     if(testClass(1, 2, "") && notBeenFoundVerticalOwn[5] && testClass(4, 2, players[current]) && testClass(3, 2, players[current]) && testClass(2, 2, players[current])) {
                 notBeenFoundVerticalOwn[5] = false;
        console.log("6");
        currentCol = 2;
        return true;
    }
//    
//    
         if(testClass(3, 3, "") && notBeenFoundVerticalOwn[6] && testClass(6, 3, players[current]) && testClass(5, 3, players[current]) && testClass(4, 3, players[current])) {
                     notBeenFoundVerticalOwn[6] = false;
        console.log("7");
        currentCol = 3;
        return true;
    }
    
     if(testClass(2, 3, "") && notBeenFoundVerticalOwn[7] && testClass(5, 3, players[current]) && testClass(4, 3, players[current]) && testClass(3, 3, players[current])) {
                 notBeenFoundVerticalOwn[7] = false;
        console.log("8");
        currentCol = 3;
        return true;
    }
    
     if(testClass(1, 3, "") && notBeenFoundVerticalOwn[8] && testClass(4, 3, players[current]) && testClass(3, 3, players[current]) && testClass(2, 3, players[current])) {
                 notBeenFoundVertical[8] = false;
        console.log("9");
        currentCol = 3;
        return true;
    }
//    
             if(testClass(3, 4, "") && notBeenFoundVerticalOwn[9] && testClass(6, 4, players[current]) && testClass(5, 4, players[current]) && testClass(4, 4, players[current])) {
                         notBeenFoundVerticalOwn[9] = false;
        console.log("10");
        currentCol = 4;
        return true;
    }
    
     if(testClass(2, 4, "") && notBeenFoundVerticalOwn[10] && testClass(5, 4, players[current]) && testClass(4, 4, players[current]) && testClass(3, 4, players[current])) {
                 notBeenFoundVerticalOwn[10] = false;
        console.log("11");
        currentCol = 4;
        return true;
    }
    
     if(testClass(1, 4, "") && notBeenFoundVerticalOwn[11] && testClass(4, 4, players[current]) && testClass(3, 4, players[current]) && testClass(2, 4, players[current])) {
                 notBeenFoundVerticalOwn[11] = false;
        console.log("12");
        currentCol = 4;
        return true;
    }
//    
                 if(testClass(3, 5, "") && notBeenFoundVerticalOwn[12] && testClass(6, 5, players[current]) && testClass(5, 5, players[current]) && testClass(4, 5, players[current])) {
                             notBeenFoundVerticalOwn[12] = false;
        console.log("13");
        currentCol = 5;
        return true;
    }
    
     if(testClass(2, 5, "") && notBeenFoundVerticalOwn[13] && testClass(5, 5, players[current]) && testClass(4, 5, players[current]) && testClass(3, 5, players[current])) {
                 notBeenFoundVerticalOwn[13] = false;
        console.log("14");
        currentCol = 5;
        return true;
    }
    
     if(testClass(1, 5, "") && notBeenFoundVerticalOwn[14] && testClass(4, 5, players[current]) && testClass(3, 5, players[current]) && testClass(2, 5, players[current])) {
                 notBeenFoundVertical[14] = false;
        console.log("15");
        currentCol = 5;
        return true;
    }
//    
//      
                 if(testClass(3, 6, "") && notBeenFoundVerticalOwn[15] && testClass(6, 6, players[current]) && testClass(5, 6, players[current]) && testClass(4, 6, players[current])) {
                             notBeenFoundVertical[15] = false;
        console.log("16");
        currentCol = 6;
        return true;
    }
    
     if(testClass(2, 6, "") && notBeenFoundVerticalOwn[16] && testClass(5, 6, players[current]) && testClass(4, 6, players[current]) && testClass(3, 6, players[current])) {
                 notBeenFoundVertical[16] = false;
        console.log("17");
        currentCol = 6;
        return true;
    }
    
     if(testClass(1, 6, "") && notBeenFoundVerticalOwn[17] && testClass(4, 6, players[current]) && testClass(3, 6, players[current]) && testClass(2, 6, players[current])) {
                 notBeenFoundVertical[17] = false;
        console.log("18");
        currentCol = 6;
        return true;
    }
//    
                     if(testClass(3, 7, "") && notBeenFoundVerticalOwn[18] && testClass(6, 7, players[current]) && testClass(5, 7, players[current]) && testClass(4, 7, players[current])) {
                                 notBeenFoundVerticalOwn[18] = false;
        console.log("19");
        currentCol = 7;
        return true;
    }
    
     if(testClass(2, 7, "") && notBeenFoundVerticalOwn[19] && testClass(5, 7, players[current]) && testClass(4, 7, players[current]) && testClass(3, 7, players[current])) {
                 notBeenFoundVerticalOwn[19] = false;
        console.log("20");
        currentCol = 7;
        return true;
    }
    
     if(testClass(1, 7, "") && notBeenFoundVerticalOwn[20] && testClass(4, 7, players[current]) && testClass(3, 7, players[current]) && testClass(2, 7, players[current])) {
                 notBeenFoundVerticalOwn[20] = false;
        console.log("21");
        currentCol = 7;
        return true;
    }
    return false;
}
    
    
function foundThreeVerticalOpp() {
    
    // [0][6] largest
    // [5][0] largets
    // first row, second column
    
    // testClass(row, col)
    // testClass(6, 1) refers to bottom left
    
    // col 1-7 (second param)
    // go through row 6-4
    // row 5-3
    // row 5-2
    
//    var found3 = 0;
//    
//    for (var colu=1; colu<=7; colu++) {
//        if(found3 == 3) {
//            console.log("_______");
//            currentCol = colu - 1;
//            return true;
//        }
//        found3 = 0;
//        for (var rowu = 6; rowu<=4; rowu--) {
//            if (testClass(rowu, colu, players[(current+1)%2])) {
//                found3 = found3 + 1;
//               
//                break;
//            } else {
//                found3 = 0;
//            }
//             console.log("3: "+ found3);
//            
////            if (testClass(rowu, colu, players[current])) {
////                found3 = found3 + 1;
////                break;
////            } else {
////                found3 = 0;
////            }
//            
//        }
//    }
    
//    for(var colu=1; colu<=7; colu++) {
//        if (found3) {
//            currentCol = colu - 1;
//        }
//        found3 = 0;
//        for (var rowu=6; rowu<=4; rowu--) {
//            
//             if(testClass(rowu, colu, players[(current+1) % 2]) {
//                found3 = found3 + 1;
//            } else {
//                found3 = 0;
//            } 
//            
//                if(testClass(rowu, colu, players[current]) && 
//                testClass(rowu, colu, players[current]) && 
//                testClass(rowu, colu, players[current])) {
//                console.log("________ __");
//                currentCol = colu;
//                return true;
//            }
//            
//            
//        }
//    }
//    }
    

//    
    if(notBeenFoundVertical[0] && testClass(6, 1, players[(current+1) % 2]) && testClass(5, 1, players[(current+1) % 2]) && testClass(4, 1, players[(current+1) % 2])) {
        console.log("1");
        currentCol = 1;
                    
        // now this one has already been found
        notBeenFoundVertical[0] = false;
        return true;
                    
                    
                }
//    
     if(notBeenFoundVertical[1] && testClass(5, 1, players[(current+1) % 2]) && testClass(4, 1, players[(current+1) % 2]) && testClass(3, 1, players[(current+1) % 2])) {
        console.log("2");
                            notBeenFoundVertical[1] = false;
        currentCol = 1;
        return true;
    }
    
     if(notBeenFoundVertical[2] && testClass(4, 1, players[(current+1) % 2]) && testClass(3, 1, players[(current+1) % 2]) && testClass(2, 1, players[(current+1) % 2])) {
                    notBeenFoundVertical[2] = false;
        console.log("3");
        currentCol = 1;
        return true;
    }
//    
//    
       if(notBeenFoundVertical[3] && testClass(6, 2, players[(current+1) % 2]) && testClass(5, 2, players[(current+1) % 2]) && testClass(4, 2, players[(current+1) % 2])) 
    
    {
                   notBeenFoundVertical[3] = false;
        console.log("4");
        currentCol = 2;
        return true;
    }
    
     if(notBeenFoundVertical[4] && testClass(5, 2, players[(current+1) % 2]) && testClass(4, 2, players[(current+1) % 2]) && testClass(3, 2, players[(current+1) % 2])) {
                 notBeenFoundVertical[4] = false;
        console.log("5");
        currentCol = 2;
        return true;
    }
    
     if(notBeenFoundVertical[5] && testClass(4, 2, players[(current+1) % 2]) && testClass(3, 2, players[(current+1) % 2]) && testClass(2, 2, players[(current+1) % 2])) {
                 notBeenFoundVertical[5] = false;
        console.log("6");
        currentCol = 2;
        return true;
    }
//    
//    
         if(notBeenFoundVertical[6] && testClass(6, 3, players[(current+1) % 2]) && testClass(5, 3, players[(current+1) % 2]) && testClass(4, 3, players[(current+1) % 2])) {
                     notBeenFoundVertical[6] = false;
        console.log("7");
        currentCol = 3;
        return true;
    }
    
     if(notBeenFoundVertical[7] && testClass(5, 3, players[(current+1) % 2]) && testClass(4, 3, players[(current+1) % 2]) && testClass(3, 3, players[(current+1) % 2])) {
                 notBeenFoundVertical[7] = false;
        console.log("8");
        currentCol = 3;
        return true;
    }
    
     if(notBeenFoundVertical[8] && testClass(4, 3, players[(current+1) % 2]) && testClass(3, 3, players[(current+1) % 2]) && testClass(2, 3, players[(current+1) % 2])) {
                 notBeenFoundVertical[8] = false;
        console.log("9");
        currentCol = 3;
        return true;
    }
    console.log("hee");
//    
             if(notBeenFoundVertical[9] && testClass(6, 4, players[(current+1) % 2]) && testClass(5, 4, players[(current+1) % 2]) && testClass(4, 4, players[(current+1) % 2])) {
                         notBeenFoundVertical[9] = false;
        console.log("10");
        currentCol = 4;
        return true;
    }
    
     if(notBeenFoundVertical[10] && testClass(5, 4, players[(current+1) % 2]) && testClass(4, 4, players[(current+1) % 2]) && testClass(3, 4, players[(current+1) % 2])) {
                 notBeenFoundVertical[10] = false;
        console.log("11");
        currentCol = 4;
        return true;
    }
    
     if(notBeenFoundVertical[11] && testClass(4, 4, players[(current+1) % 2]) && testClass(3, 4, players[(current+1) % 2]) && testClass(2, 4, players[(current+1) % 2])) {
                 notBeenFoundVertical[11] = false;
        console.log("12");
        currentCol = 4;
        return true;
    }
//    
                 if(notBeenFoundVertical[12] && testClass(6, 5, players[(current+1) % 2]) && testClass(5, 5, players[(current+1) % 2]) && testClass(4, 5, players[(current+1) % 2])) {
                             notBeenFoundVertical[12] = false;
        console.log("13");
        currentCol = 5;
        return true;
    }
    
     if(notBeenFoundVertical[13] && testClass(5, 5, players[(current+1) % 2]) && testClass(4, 5, players[(current+1) % 2]) && testClass(3, 5, players[(current+1) % 2])) {
                 notBeenFoundVertical[13] = false;
        console.log("14");
        currentCol = 5;
        return true;
    }
    
     if(notBeenFoundVertical[14] && testClass(4, 5, players[(current+1) % 2]) && testClass(3, 5, players[(current+1) % 2]) && testClass(2, 5, players[(current+1) % 2])) {
                 notBeenFoundVertical[14] = false;
        console.log("15");
        currentCol = 5;
        return true;
    }
//    
//      
                 if(notBeenFoundVertical[15] && testClass(6, 6, players[(current+1) % 2]) && testClass(5, 6, players[(current+1) % 2]) && testClass(4, 6, players[(current+1) % 2])) {
                             notBeenFoundVertical[15] = false;
        console.log("16");
        currentCol = 6;
        return true;
    }
    
     if(notBeenFoundVertical[16] && testClass(5, 6, players[(current+1) % 2]) && testClass(4, 6, players[(current+1) % 2]) && testClass(3, 6, players[(current+1) % 2])) {
                 notBeenFoundVertical[16] = false;
        console.log("17");
        currentCol = 6;
        return true;
    }
    
     if(notBeenFoundVertical[17] && testClass(4, 6, players[(current+1) % 2]) && testClass(3, 6, players[(current+1) % 2]) && testClass(2, 6, players[(current+1) % 2])) {
                 notBeenFoundVertical[17] = false;
        console.log("18");
        currentCol = 6;
        return true;
    }
//    
                     if(notBeenFoundVertical[18] && testClass(6, 7, players[(current+1) % 2]) && testClass(5, 7, players[(current+1) % 2]) && testClass(4, 7, players[(current+1) % 2])) {
                                 notBeenFoundVertical[18] = false;
        console.log("19");
        currentCol = 7;
        return true;
    }
    
     if(notBeenFoundVertical[19] && testClass(5, 7, players[(current+1) % 2]) && testClass(4, 7, players[(current+1) % 2]) && testClass(3, 7, players[(current+1) % 2])) {
                 notBeenFoundVertical[19] = false;
        console.log("20");
        currentCol = 7;
        return true;
    }
    
     if(notBeenFoundVertical[20] && testClass(4, 7, players[(current+1) % 2]) && testClass(3, 7, players[(current+1) % 2]) && testClass(2, 7, players[(current+1) % 2])) {
                 notBeenFoundVertical[20] = false;
        console.log("21");
        currentCol = 7;
        return true;
    }

    return false;
}


    
function chooseArrow() {
    document.getElementById("left").removeAttribute("style");
    document.getElementById("right").setAttribute("style", "background: 	#FFC0CB;");
    numFilled++;
    var j = currentCol;
    var delayInMilliseconds = 300;
    if(!finished){
                    for (var t = 6;t>0;t--){
                        if(testClass(t,j,'')){
                            colorField(t,j,players[current]);
                            
                            if (filled()) {
                                if (human) {
                                    setTimeout(function() {
                                        newGameHuman("It's a tie! Play again to see who the real winner is");
                                    }, delayInMilliseconds);
                                } else {
                                    setTimeout(function() {
                                        newGameComputer("It's a tie! Play again to beat the computer");
                                    }, delayInMilliseconds);
                                }
                            }
                            if(horizontalWon(t,j) || verticalWon(t,j) || diagonalLtrWon(t,j) || diagonalRtlWon(t,j)){
                                finished = true;
                                if (human) {
                                    setTimeout(function() {
                                        newGameHuman(wonMessage.replace("%s",players[current]));
                                    }, delayInMilliseconds);
                                } else {
                                    setTimeout(function() {
                                        newGameComputer(wonMessage.replace("%s",players[current]));
                                    }, delayInMilliseconds);
                                }
                            } else {
                                changePlayer();
                            }
                            break;
                        }
                    }
                }
    
    nextTurn();
}

function highlightNextArrow() {
    document.getElementById("right").removeAttribute("style");
    document.getElementById("left").setAttribute("style", "background: 	#FFC0CB;");
    
    
    var currentArrow = document.getElementById("c-1-" + currentCol);
    currentArrow.removeAttribute("style");
    var gotIt = false;
    
    if (currentCol < 7) {
        if (testClass(1, currentCol+1, '')) {
           
            currentCol++;
        } else {
            currentCol = findNextAvailable();
        }
    } else {
        if (testClass(1, 1, '')) {
            
            currentCol = 1;
        } else {
            currentCol = findNextAvailable();
        }
    }
    
    
    if (playerYellow){
    var nextArrow = document.getElementById("c-1-" + currentCol).setAttribute("style", "background: yellow;");
    } else {
        var nextArrow = document.getElementById("c-1-" + currentCol).setAttribute("style", "background: red;");
    }

}
    
    function findNextAvailable() {
        var foundIt = false;
        var c = currentCol;
        while(foundIt == false) {
            if (c < 7) {
                if (testClass(1, c+1, '')) {
                    c = c+1;
                    console.log("c: " + c);
                    foundIt = true;
                } else {
                    c++;
                    console.log("got here: " + c);
                }
            } else {
                if(testClass(1, 1, '')) {
                    c = 1;
                    foundIt = true;
                } else {
                    c = 1;
                }
                
            }
            
            if(foundIt) {
                return c;
            }
        }
        return -1;
    }
    
function findPreviousAvailable() {
    var foundIt = false;
        var c = currentCol;
        while(foundIt == false) {
            if (c > 1) {
                if (testClass(1, c-1, '')) {
                    c = c-1;
                    console.log("c: " + c);
                    foundIt = true;
                } else {
                    c--;
                    console.log("got here: " + c);
                }
            } else {
                if(testClass(1, 7, '')) {
                    c = 7;
                    foundIt = true;
                } else {
                    c = 7;
                }
                
            }
            
            if(foundIt) {
                return c;
            }
        }
        return -1;
    
}
    
    
function highlightPreviousArrow() {
    var currentArrow = document.getElementById("c-1-" + currentCol);
    currentArrow.removeAttribute("style");
    
    var gotIt = false;
    
    if (currentCol > 1) {
        if (testClass(1, currentCol-1, '')) {
           
            currentCol--;
        } else {
            currentCol = findPreviousAvailable();
        }
    } else {
        if (testClass(1, 7, '')) {
            
            currentCol = 7;
        } else {
            currentCol = findPreviousAvailable();
        }
    }

    
    if (playerYellow){
        var nextArrow = document.getElementById("c-1-" + currentCol).setAttribute("style", "background: yellow;");
    } else {
        var nextArrow = document.getElementById("c-1-" + currentCol).setAttribute("style", "background: red;");
    }
}
    function resetGameHuman() {
        newGameHuman("Are you sure you want to start a new game playing against a human?")
    }
    
    function resetGameComputer() {
        newGameComputer("Are you sure you want to start a new game playing against the computer?")
    }
    
    
    
    document.getElementById("left").addEventListener("click", highlightNextArrow);
    document.getElementById("right").addEventListener("click", chooseArrow);
    document.getElementById("rH").addEventListener("click", resetGameHuman);
    document.getElementById("rC").addEventListener("click", resetGameComputer);
   
   
    document.addEventListener('keydown', logKey);

function logKey(e) {
    
    if (!finished) {
        
    // stops anything from happen when holding down a key
    if (e.repeat) {
        return;
    }
    
    // enter key
     if (e.keyCode == 13) {
        chooseArrow();
        
    }
     
    // space bar
    if (e.keyCode == 32) {
       highlightNextArrow();
    }
    
     // right arrow
    if (e.keyCode == 39) {
       highlightNextArrow();
    }
    
    // left arrow
    if (e.keyCode == 37) {
        document.getElementById("right").removeAttribute("style");
        document.getElementById("left").setAttribute("style", "background: 	#FFC0CB;");
        highlightPreviousArrow();
        
    }
    
    // down arrow
    if (e.keyCode == 40) {
        document.getElementById("left").removeAttribute("style");
        document.getElementById("right").setAttribute("style", "background: 	#FFC0CB;"); 
        chooseArrow();

    }
    }
    
    
}
    
function nextTurn() {
    document.getElementById("c-1-" + currentCol).removeAttribute("style");
    playerYellow = !playerYellow;
    currentCol = 7;
    currentCol = findNextAvailable();
    highlightFirstArrow();
    
    if (!playerYellow && !human && easy && !finished) {
        console.log("yay here");
        var delayInMilliseconds = 300;
        setTimeout(function() {
            computerAIEasy();
        }, delayInMilliseconds);
    }
}



function highlightFirstArrow() {
    if(playerYellow) {
        var firstArrow = document.getElementById("c-1-" + currentCol).setAttribute("style", "background: yellow;");
    } else {
        var firstArrow = document.getElementById("c-1-" + currentCol).setAttribute("style", "background: red;");
    }
}
    
function filled() {
    if(numFilled >= 42) {
        return true;
    } 
    return false;
}
    
   
// Some of the following code is credited to John Slegers
    var                      
    start = function(){
        document.getElementById("left").addEventListener("click", highlightNextArrow);
    document.getElementById("right").addEventListener("click", chooseArrow);
        finished = false;
        currentCol = 1;
        current = 0;
        playerYellow = true;
        changePlayer();
        numFilled = 0;
    },  		
    newGameHuman = function(message){
        if (confirm(message)){
//            document.location.reload();
//            forAllCells(emptyField);
            document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: yellow;");
            document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: red;");
            human = true;
            start();
            forAllCells(emptyField);
            highlightFirstArrow();
        } else {
            if(finished) {
                
                 document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: yellow;");
            document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: red;");
                
                document.getElementById("left").removeEventListener("click", highlightNextArrow);
                document.getElementById("right").removeEventListener("click", chooseArrow);
            }
        }
    },   
      newGameComputer = function(message){
        if (confirm(message)){
//            document.location.reload();
//            forAllCells(emptyField);
             for (var i = 0; i < 20; i++) {
                notBeenFoundVertical[i] = true;
                notBeenFoundVerticalOwn[i] = true;
            }
            document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: yellow;");
            document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: red;");
            human = false;
            easy = true;
            start();
            forAllCells(emptyField);
            highlightFirstArrow();
        } else {
            console.log("finished: " + finished);
            if(finished) {
                console.log("here in finished");
                 document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: yellow;");
                document.getElementById("c-1-" + currentCol).removeAttribute("style", "background: red;");
                
                document.getElementById("left").removeEventListener("click", highlightNextArrow);
                document.getElementById("right").removeEventListener("click", chooseArrow);
            }
        }
    },  
    element = function(id){
        return doc.getElementById(id);
    },
    value = function(el){
        return element(el).innerHTML;
    },                        
    cell = function(i,j){
        return element("c-"+i+"-"+j);
    },       
    forAllCells = function(action){
        for (var t = 1;t<7;t++){
            for (var counter2 = 1;counter2<8;counter2++){
                action(t,counter2);
            }
        }
    },                     
    sameColor = function(i,j){
        return testClass(i,j,players[current]);
    },                        
    changePlayer = function(){
        element("c").innerHTML = players[current = (current + 1) % 2];
    },                           
    horizontalWon = function(i,j){
        for(var min=j-1;min>0;min--)if(!sameColor(i,min))break;					
        for(var max=j+1;max<8;max++)if(!sameColor(i,max))break;
        return max-min>4;
    },
                                
    verticalWon = function(i,j){
        for(var max=i+1;max<7;max++)if(!sameColor(max,j))break;
        return max-i>3;
    },                        
    diagonalLtrWon = function(i,j){
        for(var min=i-1,t=j-1;min>0;min--,t--)if(t<1||!sameColor(min,t))break;
        for(var max=i+1,t=j+1;max<7;max++,t++)if(t>7||!sameColor(max,t))break;
        return max-min>4;
    },                      
    diagonalRtlWon = function(i,j){
        for(var min=i-1,t=j+1;min>0;min--,t++)if(t>7||!sameColor(min,t))break;
        for(var max=i+1,t=j-1;max<7;max++,t--)if(t<1||!sameColor(max,t))break;
        return max-min>4;
    },         
    colorField = function(i,j,color){
        cell(i,j).className = color;
    },                      
    emptyField = function(i,j){
        colorField(i,j,'');
    },
    testClass = function(i,j,value){
        return cell(i,j).className == value;
    },
    players = [value("a"),value("b")],         
    current = 0,
    newGameMessage = value("n"),
    wonMessage = value("w"),
    finished;
    start();
    forAllCells(addCellBehavior);
    element("rH").onclick = function(){
        newGameHuman(newGameMessage)
    };
})(document);


