import React from 'react'
import PropTypes from 'prop-types'

const Button: React.FC<{
    children: any
    variant?: any
    size?: any
    className?: any
    onClick?: any
    disabled?: boolean
    type?: any
    props?: Iterator<any>
}> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    type = 'button',
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200'

    const variants: any = {
        primary:
            'bg-violet-600 text-white hover:bg-violet-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        secondary:
            'bg-violet-200 text-gray-900 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        outline:
            'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
    }

    const sizes: any = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-2.5 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'p-2',
    }

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''

    return (
        <button
            type={type}
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabledStyles}
        ${className}
      `}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'ghost',
        'outline',
        'danger',
    ]),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'icon']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
