export const mainTheme = {
    bg: '#1C1C1C',
    fg: '#FFD23F',
    fontColor: '#FFFFFF',
}

export const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    startTablet: '620px',
    tablet: '845px',
    laptop: '1100px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    startTablet: `(min-width: ${sizes.startTablet})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
}

export const devicesMax = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
}
