import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  currentCategory: string = '';
  currentSubcategory: string = '';
  private validCategories: string[] = [
    'masculino',
    'feminino',
    'calcados',
    'infantil',
    'acessorios',
  ];
  private validSubcategories: Record<string, string[]> = {
    infantil: ['masculino', 'feminino'],
    calcados: [
      'masculino',
      'feminino',
      'infantil masculino',
      'infantil feminino',
    ],
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const loadedCategory = params['category'] as string | undefined;
      const loadedSubcategory = params['subcategory'] as string | undefined;

      if (!loadedCategory || !this.validCategories.includes(loadedCategory)) {
        this.router.navigate(['/404']);
        return;
      }

      if (loadedCategory in this.validSubcategories) {
        const validSubcategories = this.validSubcategories[loadedCategory];
        if (
          loadedSubcategory &&
          !validSubcategories.includes(loadedSubcategory)
        ) {
          this.router.navigate(['/404']);
          return;
        }
        this.currentSubcategory = loadedSubcategory || '';
      }

      this.currentCategory = loadedCategory;
    });
  }
}
