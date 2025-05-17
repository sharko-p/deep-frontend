import { render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { fireEvent } from '@storybook/testing-library';
import { Sidebar } from './Sidebar';
import {
    componentRender
} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('with only firs param', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender (<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
