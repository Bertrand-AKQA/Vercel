exports.createPages = ({ graphql, actions }) => {
    const {createRedirect} = actions 
    createRedirect({ fromPath: 'https://vercel-beta.vercel.app/', toPath: 'https://www.mk2.com/institut', isPermanent: true });
  }