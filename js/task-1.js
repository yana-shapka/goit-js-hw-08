const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const categoryTitle = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
}
