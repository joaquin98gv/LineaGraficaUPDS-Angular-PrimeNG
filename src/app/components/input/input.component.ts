import { Component, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  inputn: any[] = [22, 23, 24, 25, 26, 27, 28, 29];
  countries!: any[];
  filteredCountries!: any[];
  selectedCountryAdvanced!: any[];

  constructor(private countryService: CountryService, private filterService: FilterService) {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  ngOnInit(): void {
  }

  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

}
