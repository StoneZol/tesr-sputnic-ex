# 🛒 ProductCard Component

Компонент `ProductCard` — это адаптивная карточка товара, разработанная с использованием **React** и **TypeScript**.

## 📋 Задание

Реализовать компонент, который принимает следующие props:

- `title: string` — название товара  
- `origin: string` — страна происхождения  
- `price: number` — цена в **копейках**  
- `currency: string` — валюта "RUB" | "USD" | "EUR"
- `imageUrl: string` — ссылка на изображение товара  

Дополнительно:

- Отображать цену с помощью `Intl.NumberFormat` с учетом локали и валюты.
- Адаптивная вёрстка: при ширине экрана `< 500px` карточка переходит в одну колонку.

## 🧩 Технологии

- React
- TypeScript
- Intl.NumberFormat API

## 🖼️ Пример использования

```tsx
<ProductCard
  title="Кружка керамическая"
  origin="Россия"
  price={34900}
  currency="RUB"
  imageUrl="https://example.com/mug.jpg"
/>
```

или

```tsx
<ProductCard
  {...someData}
/>
```

## ⚙️ Запуск проекта

```bash
npm install
npm run dev
```

## 📁 Структура

```bash
components/
  └── ProductCard/
        ├── ProductCard.tsx
        ├── ProductCard.types.ts
        ├── ProductCard.module.css
        └── index.ts
```
