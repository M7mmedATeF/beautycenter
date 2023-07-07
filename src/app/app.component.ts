import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beautycenter';

  /**
   *  status
   *    0   => refused flag
   *    1   => accepted flag
   *    2   => first time flag
   */

  hiddenForm = {
      status: 2,
      date: new Date().getDate()
  }

  ngOnInit(){
    let res = localStorage.getItem("hideForm");
    let date = new Date();
    if(res){
      var frmST = JSON.parse(res)
      if(date.getDate() - frmST.date >= 3 && frmST.status != 1){
        this.hiddenForm = frmST;
      }else{
        let frm = document.getElementById('form')
        frm?.classList.add('hide')
      }
    }
  }


  refuse = (form:HTMLElement) => {
    this.hiddenForm = {
      status: 1,
      date: new Date().getDate()
    }

    localStorage.setItem('hideForm', JSON.stringify(this.hiddenForm))
    form.classList.add('hide')
  }
}
