import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AssignMap} from './assign-map.model';
import {AssignMapService} from './assign-map.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'mv-assign-map',
  templateUrl: './assign-map.component.html',
  styleUrls: ['./assign-map.component.scss']
})
export class AssignMapComponent implements OnInit, OnDestroy {

  assignMap: AssignMap;
  loading = false;
  private subscription = new Subscription();

  constructor(private assignMapService: AssignMapService) {
  }

  ngOnInit() {
    this.loading = true;
    this.subscription.add(
      this.assignMapService.load().pipe(finalize(() => this.loading = false))
        .subscribe((assignMap: AssignMap) => this.assignMap = assignMap));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  remove(mapId: string) {
    this.loading = true;
    this.subscription.add(
      this.assignMapService.remove(mapId).pipe(finalize(() => this.loading = false))
        .subscribe((assignMap: AssignMap) => this.assignMap = assignMap));
  }

  assign({mapId, wingId, fromList}: { mapId: string, wingId: string, fromList: boolean }) {
    this.loading = true;
    this.subscription.add(
      this.assignMapService.assign(mapId, wingId, fromList).pipe(finalize(() => this.loading = false))
        .subscribe((assignMap: AssignMap) => this.assignMap = assignMap));
  }
}
