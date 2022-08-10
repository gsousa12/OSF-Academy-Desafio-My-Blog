const host = "https://academy-julho-backend.vercel.app";
const endPoints = {
  obterUsuario: `${host}/api/users`,
  obterPosts: `${host}/api/posts`,
  obterDetalhesPost: (id) => `${host}/api/posts/${id}`,
};

export default endPoints;
