import {render, screen, cleanup} from '@testing-library/react';
import Photo from '../components/Photo';

afterEach(()=>{
cleanup();
});

test('should render Photo component', () => {
    render(<Photo/>);
    const todoElement = screen.getByTestId('photo-${user}');
    expect(todoElement).toBeInTheDocument();

}
)