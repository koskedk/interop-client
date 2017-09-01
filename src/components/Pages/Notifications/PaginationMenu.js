import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export const PaginationMenu = (props) => {
    const itemNumbers = Array(props.pages).fill(1).map((x, y) => x + y)
    const MenuItems = itemNumbers.map(menuItem => 
        <Menu.Item 
            key={menuItem}
            name={menuItem + ''} 
            active={props.activeItem === menuItem + ''} 
            onClick={props.handleItemClick} />
    )

    return (
        <div>
            <Icon name="angle double left"/>
            <Menu pagination inverted>
                {MenuItems}
            </Menu>
            <Icon name="angle double right"/>
        </div>
    )
}