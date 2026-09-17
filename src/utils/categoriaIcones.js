import {
  Library,
  HeartHandshake,
  Globe,
  Briefcase,
  FlaskConical,
  BookOpen,
  Utensils,
  Plane,
  Languages,
  Search,
} from 'lucide-react';

const categoriaIcones = {
  // Categorias principais padronizadas no app
  'Serviços Acadêmicos': Library,
  'Assistência e Permanência': HeartHandshake,
  'Idiomas e Internacionalização': Globe,
  'Carreira e Extensão': Briefcase,
  'Pesquisa e Ciência': FlaskConical,

  // Mapeamentos secundários/individuais
  Alimentação: Utensils,
  'Assistência Estudantil': HeartHandshake,
  Biblioteca: Library,
  Estágio: Search,
  Extensão: BookOpen,
  Idiomas: Languages,
  Intercâmbio: Plane,
  Pesquisa: FlaskConical,
};

export default categoriaIcones;