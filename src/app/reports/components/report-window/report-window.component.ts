import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-report-window',
  templateUrl: './report-window.component.html',
  styleUrls: ['./report-window.component.css']
})
export class ReportWindowComponent {
  @Input() message: string | undefined;
  @Input() report: any;
  @Output() close = new EventEmitter<void>();
  closeWindow() {
    this.message = undefined;
    this.close.emit();
  }
}
