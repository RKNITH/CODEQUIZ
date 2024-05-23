var score = 0;
var Grade = ' ';
function result() {
    // var score=0;
    // var Grade =' ';
    var Q1_ans = 'B';
    var Q2_ans = 'D';
    var Q3_ans = 'B';
    var Q4_ans = 'A';
    var Q5_ans = 'D';

    var Q1 = document.quiz.Q1.value;
    var Q2 = document.quiz.Q2.value;
    var Q3 = document.quiz.Q3.value;
    var Q4 = document.quiz.Q4.value;
    var Q5 = document.quiz.Q5.value;

    var q1_a = document.getElementById("Q1-A").value;
    var q1_b = document.getElementById("Q1-B").value;
    var q1_c = document.getElementById("Q1-C").value;
    var q1_d = document.getElementById("Q1-D").value;
    if(q1_a == Q1_ans){
        document.getElementById("Q1-a").style="background-color:#14db3f;";
    }
    if(q1_b == Q1_ans){
        document.getElementById("Q1-b").style="background-color:#14db3f;";
    }
    if(q1_c == Q1_ans){
        document.getElementById("Q1-c").style="background-color:#14db3f;";
    }
    if(q1_d == Q1_ans){
        document.getElementById("Q1-d").style="background-color:#14db3f;";
    }
    var q2_a = document.getElementById("Q2-A").value;
    var q2_b = document.getElementById("Q2-B").value;
    var q2_c = document.getElementById("Q2-C").value;
    var q2_d = document.getElementById("Q2-D").value;
    if(q2_a == Q2_ans){
        document.getElementById("Q2-a").style="background-color:#14db3f;";
    }
    if(q2_b == Q2_ans){
        document.getElementById("Q2-b").style="background-color:#14db3f;";
    }
    if(q2_c == Q2_ans){
        document.getElementById("Q2-c").style="background-color:#14db3f;";
    }
    if(q2_d == Q2_ans){
        document.getElementById("Q2-d").style="background-color:#14db3f;";
    }
    var q3_a = document.getElementById("Q3-A").value;
    var q3_b = document.getElementById("Q3-B").value;
    var q3_c = document.getElementById("Q3-C").value;
    var q3_d = document.getElementById("Q3-D").value;
    if(q3_a == Q3_ans){
        document.getElementById("Q3-a").style="background-color:#14db3f;";
    }
    if(q3_b == Q3_ans){
        document.getElementById("Q3-b").style="background-color:#14db3f;";
    }
    if(q3_c == Q3_ans){
        document.getElementById("Q3-c").style="background-color:#14db3f;";
    }
    if(q3_d == Q3_ans){
        document.getElementById("Q3-d").style="background-color:#14db3f;";
    }
    var q4_a = document.getElementById("Q4-A").value;
    var q4_b = document.getElementById("Q4-B").value;
    var q4_c = document.getElementById("Q4-C").value;
    var q4_d = document.getElementById("Q4-D").value;
    if(q4_a == Q4_ans){
        document.getElementById("Q4-a").style="background-color:#14db3f;";
    }
    if(q4_b == Q4_ans){
        document.getElementById("Q4-b").style="background-color:#14db3f;";
    }
    if(q4_c == Q4_ans){
        document.getElementById("Q4-c").style="background-color:#14db3f;";
    }
    if(q4_d == Q4_ans){
        document.getElementById("Q4-d").style="background-color:#14db3f;";
    }
    var q5_a = document.getElementById("Q5-A").value;
    var q5_b = document.getElementById("Q5-B").value;
    var q5_c = document.getElementById("Q5-C").value;
    var q5_d = document.getElementById("Q5-D").value;
    if(q5_a == Q5_ans){
        document.getElementById("Q5-a").style="background-color:#14db3f;";
    }
    if(q5_b == Q5_ans){
        document.getElementById("Q5-b").style="background-color:#14db3f;";
    }
    if(q5_c == Q5_ans){
        document.getElementById("Q5-c").style="background-color:#14db3f;";
    }
    if(q5_d == Q5_ans){
        document.getElementById("Q5-d").style="background-color:#14db3f;";
    }
    if(Q1==Q1_ans){
        score+= 2;
    }
    else{
      if(q1_a == Q1 && Q1 != Q1_ans){
          document.getElementById("Q1-a").style="background-color:red;";
      }
      if(q1_b == Q1 && Q1 != Q1_ans){
          document.getElementById("Q1-b").style="background-color:red;";
      }
      if(q1_c == Q1 && Q1 != Q1_ans){
          document.getElementById("Q1-c").style="background-color:red;";
      }
      if(q1_d == Q1 && Q1 != Q1_ans){
          document.getElementById("Q1-d").style="background-color:red;";
      }
    }
    if(Q2==Q2_ans){
      score+= 2
    }
    else{
      if(q2_a == Q2 && Q2 != Q2_ans){
          document.getElementById("Q2-a").style="background-color:red;";
      }
      if(q2_b == Q2 && Q2 != Q2_ans){
          document.getElementById("Q2-b").style="background-color:red;";
      }
      if(q2_c == Q2 && Q2 != Q2_ans){
          document.getElementById("Q2-c").style="background-color:red;";
      }
      if(q2_d == Q2 && Q2 != Q2_ans){
          document.getElementById("Q2-d").style="background-color:red;";
      }
    }
    if(Q3==Q3_ans){
      score+= 2
    }
    else{
      if(q3_a == Q3 && Q3 != Q3_ans){
          document.getElementById("Q3-a").style="background-color:red;";
      }
      if(q3_b == Q3 && Q3 != Q3_ans){
          document.getElementById("Q3-b").style="background-color:red;";
      }
      if(q3_c == Q3 && Q3 != Q3_ans){
          document.getElementById("Q3-c").style="background-color:red;";
      }
      if(q3_d == Q3 && Q3 != Q3_ans){
          document.getElementById("Q3-d").style="background-color:red;";
      }
    }
    if(Q4==Q4_ans){
      score+= 2
    }
    else{
      if(q4_a == Q4 && Q4 != Q4_ans){
          document.getElementById("Q4-a").style="background-color:red;";
      }
      if(q4_b == Q4 && Q4 != Q4_ans){
          document.getElementById("Q4-b").style="background-color:red;";
      }
      if(q4_c == Q4 && Q4 != Q4_ans){
          document.getElementById("Q4-c").style="background-color:#e61410;";
      }
      if(q4_d == Q4 && Q4 != Q4_ans){
          document.getElementById("Q4-d").style="background-color:#e61410;";
      }
    }
    if(Q5==Q5_ans){
      score+= 2
    }
    else{
      if(q5_a == Q5 && Q5 != Q5_ans){
          document.getElementById("Q5-a").style="background-color:#e61410;";
      }
      else if(q5_b == Q5 && Q5 != Q5_ans){
          document.getElementById("Q5-b").style="background-color:#e61410;";
      }
      else if(q5_c == Q5 && Q5 != Q5_ans){
          document.getElementById("Q5-c").style="background-color:#e61410;";
      }
      else if(q5_d == Q5 && Q5 != Q5_ans){
          document.getElementById("Q5-d").style="background-color:#e61410;";
      }
    }

    switch(score){
        case 10 : Grade='A';
                    break;
        case 8  : Grade = 'B';
                    break;
        case 6  : Grade='C';
                    break;
        case 4  : Grade = 'D';
                    break;
        case 2  : Grade='E';
                    break;
        default : Grade = 'F';
                    break;
    }
    // document.write("Result is");
    // document.write("<br>");
    // document.write("Your score is "+score+"/10");
    // document.write("<br>");
    // document.write("\nYour Grade is : "+Grade);
}
$(function(){
    $('.custom-modal').click(function(e){
      e.preventDefault();
      var mymodal = $('#myModal');
      mymodal.find('.modal-body').text("Result is\n"+"Your score is "+score+"/10"+"\n"+"Your Grade is : "+Grade);
      mymodal.modal('show');

    });
  })
