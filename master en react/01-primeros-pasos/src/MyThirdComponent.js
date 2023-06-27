import React from 'react'

export const MyThirdComponent = () => {
    // const books = ['Harry Potter', 'Game of Thrones', 'Clean Code']
    const books = [];
    return (
        <div className='MyThirdComponent'>
            <h3>Third Component</h3>
            <h2>Libros</h2>
            {books.length >= 1 ? (
                    // if condition its true
                    <ul>
                        {
                            books.map((book, index) => {
                                return <li key="index">{book}</li>
                            })
                        }
                    </ul>
                )
                : (
                    // else
                    <p>No hay libros</p>
                )
            }
        </div>
    )
}