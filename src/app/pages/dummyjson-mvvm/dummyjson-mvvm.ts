import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { DummyjsonViewModel } from './viewmodel/dummyjson-mvvm.viewmodel';
import { DummyjsonCardMvvm } from './component/dummyjson-card/dummyjson-card';
import { AsyncPipe } from '@angular/common';
import { DummyjsonMvvmState } from './viewmodel/dummyjson-mvvm.state';

@Component({
  imports: [DummyjsonCardMvvm],
  providers: [DummyjsonViewModel, DummyjsonMvvmState],
  selector: 'app-dummyjson-mvvm',
  styleUrl: './dummyjson-mvvm.css',
  templateUrl: './dummyjson-mvvm.html',
})
export class DummyjsonMvvm implements AfterViewInit, OnDestroy {
  protected readonly dummyjsonVM = inject(DummyjsonViewModel);
  protected readonly supportInfiniteScrolls = typeof IntersectionObserver !== 'undefined';
  private observer?: IntersectionObserver;
  private sentinel?: ElementRef<HTMLElement>;

  @ViewChild('loadMoreSentinel')
  set loadMoreSentinel(element: ElementRef<HTMLElement> | undefined) {
    this.observer?.disconnect();
    this.sentinel = element;
    if (element) this.observer?.observe(element.nativeElement);
  }

  ngOnInit(): void {
    this.dummyjsonVM.init();
  }

  ngAfterViewInit(): void {
    if (!this.supportInfiniteScrolls) return;
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.dummyjsonVM.loadMore();
        }
      },
      {
        rootMargin: '200px 0px',
      },
    );

    if (this.sentinel) this.observer.observe(this.sentinel.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
