/**
 * Typed endpoint facade over HttpClient (SPEC §6).
 *
 * Session-only surface (cookie auth): no userId in bodies, no user_id path
 * segment, no API key. Bodies are camelCase.
 */

/**
 * Endpoint facade bound to one HttpClient.
 */
export class AgentApi {
  /**
   * Builds the API facade.
   *
   * @param {import('./http.js').HttpClient} httpClient The base-bound HTTP client.
   */
  constructor(httpClient) {
    this.http = httpClient;
  }

  /**
   * GET bots — lists the bots available to the caller.
   *
   * @returns {Promise<object[]>} The BotDTO array.
   */
  listBots() {
    return this.http.get('bots');
  }

  /**
   * POST query/stream — opens the bot stream over a single POST whose response
   * body is the SSE event stream (no init/streamId/events split). Returns the
   * raw Response for the SSE consumer; the conversation uuid arrives in the
   * stream (BOT_STREAM_COMPLETED), not in a separate init payload.
   *
   * @param {object} params Stream params.
   * @param {(number|string)} params.botId The target bot id.
   * @param {string} params.query The user query.
   * @param {string} [params.conversationUuid] Existing conversation to continue.
   * @param {AbortSignal} [signal] Signal to abort the stream.
   * @returns {Promise<Response>} The raw streaming response.
   */
  openStream({ botId, query, conversationUuid }, signal) {
    const body = { botId, query };
    if (conversationUuid) {
      body.conversationUuid = conversationUuid;
    }
    return this.http.postStream('query/stream', body, { signal });
  }

  /**
   * GET conversation/{conversation_uuid} — loads a conversation with messages.
   *
   * @param {string} conversationUuid The conversation uuid (path segment).
   * @returns {Promise<{conversationUuid:string, messages:object[]}>} The conversation.
   */
  getConversation(conversationUuid) {
    return this.http.get(`conversation/${conversationUuid}`);
  }

  /**
   * GET user/conversations — lists the user conversations (array directly).
   *
   * @returns {Promise<object[]>} The ConversationDTO array.
   */
  listConversations() {
    return this.http.get('user/conversations');
  }

  /**
   * DELETE conversation/{conversation_uuid} — removes one conversation.
   *
   * @param {string} conversationUuid The conversation uuid (path segment).
   * @returns {Promise<string>} The server message.
   */
  deleteConversation(conversationUuid) {
    return this.http.delete(`conversation/${conversationUuid}`);
  }

  /**
   * DELETE user/conversations — removes all conversations of the user.
   *
   * @returns {Promise<string>} The server message.
   */
  deleteAllConversations() {
    return this.http.delete('user/conversations');
  }

  /**
   * GET user/rate — returns the per-bot rate-limit counters of the user. This
   * endpoint may not exist on every deployment (admin family); callers must
   * handle a 404/405 by hiding the gauge rather than surfacing an error.
   *
   * @returns {Promise<object[]>} The RateLimitDTO array.
   */
  getRateLimits() {
    return this.http.get('user/rate');
  }

  /**
   * Builds the GET URL of the document binary endpoint.
   *
   * @param {object} params Document path params.
   * @param {(number|string)} params.botId The bot id (path segment).
   * @param {(number|string)} params.datasetId The dataset id (path segment).
   * @param {(number|string)} params.documentId The document id (path segment).
   * @returns {string} The absolute document URL.
   */
  documentUrl({ botId, datasetId, documentId }) {
    return this.http.resolve(`document/${botId}/${datasetId}/${documentId}`);
  }

  /**
   * POST message/{message_id}/feedback — records feedback (camelCase body).
   *
   * @param {object} params Feedback params.
   * @param {(number|string)} params.messageId The message id (path segment).
   * @param {boolean} params.isPositive Whether the feedback is positive.
   * @param {string} [params.comment] Optional free-text comment.
   * @returns {Promise<string>} The server message.
   */
  sendFeedback({ messageId, isPositive, comment }) {
    const body = { isPositive };
    if (comment !== undefined && comment !== null) {
      body.comment = comment;
    }
    return this.http.post(`message/${messageId}/feedback`, body);
  }

  /**
   * GET user — current user info.
   *
   * @returns {Promise<{firstName:string, lastName:string, email:string}>} The user.
   */
  getUser() {
    return this.http.get('user');
  }
}
