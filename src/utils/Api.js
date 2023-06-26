class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка сервера: ${res.status}`);
  }
  //Нужно оптимизировать позже . убрать описание вызова _checkResponse в каждой точке
  // _request(url, options) {

  //   return fetch(url, options).then(this._checkResponse);
  // }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers }).then(this._checkResponse);
    // return this._request(`${this._baseUrl}/cards`, { headers: this._headers }).then(
    //   this._checkResponse
    // );
  }

  getMyUser() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(this._checkResponse);
    // return this._request(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
    //   this._checkResponse
    // );
  }

  setUserInfo(obj) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(obj)
    }).then(this._checkResponse);
  }
  setUserAvatar(obj) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(obj)
    }).then(this._checkResponse);
  }

  sendNewCard(obj) {
    //console.log(JSON.stringify(obj));
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(obj)
    }).then(this._checkResponse);
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkResponse);
  }
  setLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'c0cfe72b-23eb-4653-b6ea-f451b2b55b5c',
    'Content-Type': 'application/json'
  }
});

export default api;
