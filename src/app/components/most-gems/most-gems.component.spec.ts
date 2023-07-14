import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { MostGemsComponent } from './most-gems.component';

describe('MostGemsComponent', () => {
  let component: MostGemsComponent;
  let fixture: ComponentFixture<MostGemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostGemsComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService, HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MostGemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
