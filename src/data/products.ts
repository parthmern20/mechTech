import pump from '../images/pump.jpg';
import hydPump from '../images/hydraulic-pump.jpg';
import fabrication from '../images/fabrication.jpg';
import machining from '../images/Machining.jpg';
import die from '../images/Die.jpeg';
import forged from '../images/Forging.jpg';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  specifications: Array<{ label: string; value: string }>;
}

export const products: any = [
  {
    id: '1',
    name: 'Mechanical Pump',
    slug: 'mechanical-pump',
    description: 'Our high-performance mechanical pumps are engineered for industrial applications requiring robust, efficient, and durable solutions. Designed with advanced sealing technology and precision engineering, they offer high-pressure capability, energy efficiency, and low maintenance. Made from high-grade stainless steel, these pumps ensure superior corrosion resistance and long operational life. Whether for fluid transfer, cooling systems, or chemical processing, our pumps deliver optimal performance under demanding conditions. They are easy to install and maintain, reducing downtime and improving productivity. Trusted by industries worldwide, our mechanical pumps set the standard for reliability, efficiency, and long-term operational stability.',
    features: [
      'High-pressure capability',
      'Energy-efficient design',
      'Durable construction',
      'Low maintenance requirements',
      'Advanced sealing technology'
    ],
    image: pump,
    specifications: [
      { label: 'Flow Rate', value: '100-500 GPM' },
      { label: 'Pressure Range', value: '0-1000 PSI' },
      { label: 'Temperature Range', value: '-20°C to 120°C' },
      { label: 'Material', value: 'Stainless Steel 316' }
    ]
  },
  {
    id: '2',
    name: 'Hydraulic Parts',
    slug: 'hydraulic-parts',
    description: 'Our advanced hydraulic pumps are designed to provide superior performance in high-pressure industrial environments. These pumps feature variable displacement for improved efficiency, a compact design for space-saving installation, and low-noise operation for better working conditions. Built to withstand heavy-duty applications, they ensure extended service life with minimal maintenance. The use of high-quality materials guarantees resistance to wear and tear, making them ideal for hydraulic systems in construction, manufacturing, and heavy machinery industries. Their efficient design helps optimize energy consumption, reducing operational costs while maximizing output. Our hydraulic pumps offer precise control, reliability, and durability for various industrial applications.',
    features: [
      'Variable displacement',
      'High pressure capability',
      'Compact design',
      'Low noise operation',
      'Extended service life'
    ],
    image: hydPump,
    specifications: [
      { label: 'Displacement', value: '10-100 cc/rev' },
      { label: 'Max Pressure', value: '350 bar' },
      { label: 'Speed Range', value: '500-3000 RPM' },
      { label: 'Efficiency', value: '95%' }
    ]
  },
  {
    id: '3',
    name: 'Fabrication',
    slug: 'fabrication',
    description: 'Our precision metal fabrication services offer custom solutions for a wide range of industrial applications. We specialize in high-quality fabrication using state-of-the-art cutting, welding, and finishing technologies. Our experienced team ensures that each fabricated component meets exact specifications, providing strength, durability, and precision. We work with a variety of materials, including steel, aluminum, and stainless steel, to create components that suit diverse applications. From prototyping to full-scale production, our fabrication services are tailored to meet the highest industry standards. Whether you need structural components, enclosures, or complex assemblies, we deliver reliable, high-performance solutions with exceptional craftsmanship.',
    features: [
      'Custom designs',
      'Precision cutting',
      'Advanced welding',
      'Quality finishing',
      'Complex assemblies'
    ],
    image: fabrication,
    specifications: [
      { label: 'Materials', value: 'Steel, Aluminum, Stainless Steel' },
      { label: 'Thickness Range', value: '0.5-50mm' },
      { label: 'Welding Types', value: 'MIG, TIG, Spot' },
      { label: 'Finishing Options', value: 'Powder Coating, Plating' }
    ]
  },
  {
    id: '4',
    name: 'Machining Parts',
    slug: 'machining-parts',
    description: 'We provide high-precision machining parts manufactured using advanced CNC technology. Our machining capabilities allow us to achieve tight tolerances, high surface finishes, and superior dimensional accuracy. We work with multiple materials, including aluminum, steel, and titanium, to produce parts that meet stringent quality standards. Our machining solutions cater to industries such as aerospace, automotive, and medical devices, where precision is critical. Each component is carefully engineered to ensure durability, performance, and reliability. With quick turnaround times and customized production options, we help clients streamline manufacturing processes and reduce costs while maintaining exceptional product quality.',
    features: [
      'CNC precision machining',
      'Tight tolerances',
      'High surface finish',
      'Multiple material options',
      'Quick turnaround time'
    ],
    image: machining,
    specifications: [
      { label: 'Tolerance', value: '±0.01mm' },
      { label: 'Material', value: 'Aluminum, Steel, Titanium' },
      { label: 'Process', value: 'CNC Turning & Milling' },
      { label: 'Surface Finish', value: 'Anodized, Powder Coating' }
    ]
  },
  {
    id: '5',
    name: 'Die and Moulding Parts',
    slug: 'die-and-moulding-parts',
    description: 'Our die and moulding parts are engineered for precision and durability, making them ideal for industrial manufacturing and tooling applications. Constructed from high-quality materials such as H13, D2, and P20 steel, these parts offer excellent wear resistance and longevity. Each moulding component undergoes CNC machining and heat treatment to ensure strength, accuracy, and performance. Our customizable designs allow manufacturers to create specialized moulds for injection moulding, die casting, and other production processes. Whether for automotive, electronics, or consumer goods manufacturing, our die and moulding parts provide reliability, high efficiency, and outstanding production capabilities.',
    features: [
      'High durability',
      'Precision engineering',
      'Wear-resistant materials',
      'Customizable designs',
      'High-efficiency production'
    ],
    image: die,
    specifications: [
      { label: 'Material', value: 'H13, D2, P20 Steel' },
      { label: 'Hardness', value: 'HRC 50-60' },
      { label: 'Process', value: 'CNC Machined & Heat Treated' },
      { label: 'Application', value: 'Injection Moulding, Die Casting' }
    ]
  },
  {
    id: '6',
    name: 'Forged and Machine Parts',
    slug: 'forged-and-machine-parts',
    description: 'We provide high-strength forged and machined parts designed for industrial durability. Our forging process ensures exceptional mechanical properties, making components resistant to stress, wear, and corrosion. We use high-quality alloy and stainless steels to produce parts for heavy machinery, automotive, and construction industries. Precision CNC machining enhances dimensional accuracy, while surface treatments such as galvanization and heat treatment improve longevity. Our custom forging capabilities allow clients to specify unique part designs suited for their applications. Whether for aerospace, oil & gas, or structural engineering, our forged and machined parts deliver superior strength and performance.',
    features: [
      'Hot & cold forging',
      'High tensile strength',
      'Corrosion resistance',
      'Precision machining',
      'Custom forging available'
    ],
    image: forged,
    specifications: [
      { label: 'Material', value: 'Alloy Steel, Stainless Steel' },
      { label: 'Weight Range', value: '1kg - 500kg' },
      { label: 'Process', value: 'Forging + CNC Machining' },
      { label: 'Surface Treatment', value: 'Galvanized, Heat Treated' }
    ]
  }
];


export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product : any) => product.slug === slug);
};