import { TestBed } from '@angular/core/testing';

import { NovorelatorioService } from './novorelatorio.service';

describe('NovorelatorioService', () => {
  let service: NovorelatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovorelatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
