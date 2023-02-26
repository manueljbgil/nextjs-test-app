const config =
    process.env.NODE_ENV === 'production'
        ? console.log('local')
        : process.env.NODE_ENV === 'test'
        ? console.log('test')
        : console.log('development')

export default config
