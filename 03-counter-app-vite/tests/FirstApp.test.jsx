import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en FirstApp', () => {
  // test('debe hacer match con el snapshot', () => {

  //     const title = 'Hola Mundo'
  //     const {container} =  render(<FirstApp title={title}/>)

  //     expect(container).toMatchSnapshot();
  //  })

  test('Debe mostrar el titulo en H1', () => {
    const title = 'Hola Mundo';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola Mundo';
    const subTitle = 'Soy un subtitulo'
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(1);
  });
});
