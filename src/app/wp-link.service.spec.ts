import { TestBed, inject } from '@angular/core/testing';

import { WpLinkService } from './wp-link.service';

describe('WpLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpLinkService]
    });
  });

  it('should be created', inject([WpLinkService], (service: WpLinkService) => {
    expect(service).toBeTruthy();
  }));
});
