import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en FirstApp', () => {
  const title = 'Hola, soy un titulo';
  const subTitle = 'Hola, soy un subtitulo';

  test('debe hacer match con snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar Hola, soy un titulo ', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe buscar titulo en H1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo enviado por props', () => { 
    render(<FirstApp title={title} subTitle={subTitle}/>);
    expect(screen.getAllByText(subTitle).length).toBe(1)
   })
});
