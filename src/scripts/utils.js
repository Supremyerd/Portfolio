const isHome = (page) => {
    return page === 'HOME';
}

const isCertificates = (page) => {
    return page === 'CERTIFICATES';
}

const isProjects = (page) => {
    return page === 'PROJECTS';
}

const isGithub = (page) => {
    return page === 'GITHUB';
}

export {
    isHome,
    isCertificates,
    isProjects,
    isGithub
}