import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  brand: 'SBD' | 'Russian Turbine' | 'Kirill Gear';
  category: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Пояс для пауэрлифтинга',
    brand: 'SBD',
    category: 'Пояса',
    price: 15900,
    image: 'https://cdn.poehali.dev/projects/beecfaca-13c4-4a33-91cc-25bf3cd72a49/files/2cb7e75f-3f54-48fe-a0db-45c692894fc3.jpg',
    description: 'Профессиональный пояс из натуральной кожи'
  },
  {
    id: 2,
    name: 'Наколенники 7мм',
    brand: 'SBD',
    category: 'Наколенники',
    price: 8900,
    image: 'https://cdn.poehali.dev/projects/beecfaca-13c4-4a33-91cc-25bf3cd72a49/files/642c639f-f240-4785-ad6e-521ef2beb1c2.jpg',
    description: 'Наколенники из неопрена премиум качества'
  },
  {
    id: 3,
    name: 'Кистевые бинты',
    brand: 'Russian Turbine',
    category: 'Бинты',
    price: 2900,
    image: 'https://cdn.poehali.dev/projects/beecfaca-13c4-4a33-91cc-25bf3cd72a49/files/3431baba-d533-4070-8224-839091208cf4.jpg',
    description: 'Эластичные бинты для жима лежа'
  },
  {
    id: 4,
    name: 'Майка для жима',
    brand: 'Russian Turbine',
    category: 'Экипировка',
    price: 12500,
    image: 'https://russianturbine.ru/upload/resize_cache/iblock/966/450_450_140cd750bba9870f18aada2478b24840a/1ntv5pm5huwlqf8j7zwipo1syrotqtxd.jpg',
    description: 'Майка однослойная для жима'
  },
  {
    id: 5,
    name: 'Комбинезон для приседа',
    brand: 'Kirill Gear',
    category: 'Экипировка',
    price: 18900,
    image: 'https://cdn.poehali.dev/projects/beecfaca-13c4-4a33-91cc-25bf3cd72a49/files/2cb7e75f-3f54-48fe-a0db-45c692894fc3.jpg',
    description: 'Профессиональный комбинезон для приседаний'
  },
  {
    id: 6,
    name: 'Наколенники IPF',
    brand: 'Kirill Gear',
    category: 'Наколенники',
    price: 9900,
    image: 'https://cdn.poehali.dev/projects/beecfaca-13c4-4a33-91cc-25bf3cd72a49/files/642c639f-f240-4785-ad6e-521ef2beb1c2.jpg',
    description: 'Одобрено IPF для соревнований'
  },
];

const brands = [
  {
    name: 'SBD',
    description: 'Британский бренд премиальной экипировки',
    logo: '🏴󐁧󐁢󐁥󐁮󐁧󐁿'
  },
  {
    name: 'Russian Turbine',
    description: 'Российский производитель экипировки мирового уровня',
    logo: '🇷🇺'
  },
  {
    name: 'Kirill Gear',
    description: 'Инновационная экипировка для силовых видов спорта',
    logo: '⚡'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'brands' | 'contacts'>('home');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">ironpro DAV</h1>
            <nav className="flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('brands')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'brands' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Бренды
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <div className="fade-in">
          <section className="py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Экипировка для чемпионов
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
                Профессиональное снаряжение для силовых видов спорта от ведущих мировых производителей
              </p>
              <Button
                size="lg"
                onClick={() => setActiveSection('catalog')}
                className="text-lg px-8 py-6 h-auto"
              >
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12">Наши бренды</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {brands.map((brand) => (
                  <Card key={brand.name} className="hover-scale cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className="text-6xl mb-4">{brand.logo}</div>
                      <h4 className="text-2xl font-bold mb-3">{brand.name}</h4>
                      <p className="text-muted-foreground">{brand.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12">Популярные товары</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {products.slice(0, 3).map((product) => (
                  <Card key={product.id} className="hover-scale overflow-hidden">
                    <div className="aspect-square bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">{product.brand}</Badge>
                      <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                        <Button size="sm">В корзину</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'catalog' && (
        <div className="fade-in">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
              
              <div className="mb-8 space-y-4">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Поиск по названию или категории..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant={selectedBrand === null ? 'default' : 'outline'}
                    onClick={() => setSelectedBrand(null)}
                    size="sm"
                  >
                    Все бренды
                  </Button>
                  {brands.map((brand) => (
                    <Button
                      key={brand.name}
                      variant={selectedBrand === brand.name ? 'default' : 'outline'}
                      onClick={() => setSelectedBrand(brand.name)}
                      size="sm"
                    >
                      {brand.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover-scale overflow-hidden">
                    <div className="aspect-square bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{product.brand}</Badge>
                        <span className="text-sm text-muted-foreground">{product.category}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</span>
                        <Button size="sm">В корзину</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="Package" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl text-muted-foreground">Товары не найдены</p>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {activeSection === 'brands' && (
        <div className="fade-in">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Наши бренды</h2>
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {brands.map((brand) => (
                  <Card key={brand.name} className="overflow-hidden">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-start gap-6">
                        <div className="text-7xl">{brand.logo}</div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-3">{brand.name}</h3>
                          <p className="text-lg text-muted-foreground mb-6">{brand.description}</p>
                          <div className="flex gap-4">
                            <Button
                              onClick={() => {
                                setSelectedBrand(brand.name);
                                setActiveSection('catalog');
                              }}
                            >
                              Смотреть товары
                              <Icon name="ArrowRight" className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'contacts' && (
        <div className="fade-in">
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-4xl font-bold mb-8">Контакты</h2>
              
              <Card className="mb-8">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Силовая, д. 10</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@ironprodav.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="h-12" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Тема" className="h-12" />
                    </div>
                    <div>
                      <textarea
                        placeholder="Сообщение"
                        className="w-full min-h-[150px] p-3 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={16} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      )}

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ironpro DAV. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;