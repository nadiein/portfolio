/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreloadingScreenComponent } from './preloading.screen.component';

describe('PreloadingScreenComponent', () => {
    let component: PreloadingScreenComponent;
    let fixture: ComponentFixture<PreloadingScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ PreloadingScreenComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreloadingScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
