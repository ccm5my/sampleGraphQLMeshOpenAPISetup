// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace WikiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: string;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  ObjMap: any;
};

export type Query = {
  /**
   * Gets availability of featured feed content for the apps by wiki domain.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  feed_availability?: Maybe<feed_availability_response>;
  /**
   * Returns the previously-stored formula via `/media/math/check/{type}` for
   * the given hash.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  media_math_formula_by_hash?: Maybe<problem>;
  /**
   * Given a request hash, renders a TeX formula into its mathematic
   * representation in the given format. When a request is issued to the
   * `/media/math/check/{format}` POST endpoint, the response contains the
   * `x-resource-location` header denoting the hash ID of the POST data. Once
   * obtained, this endpoint has to be used to obtain the actual render.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  media_math_render_by_format_by_hash?: Maybe<problem>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
   * difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
   * name-bot, user) and page-type (all-page-types, content, non-content). You can choose
   * between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
   * difference absolute sums. You can filter by editors-type (all-editor-types, anonymous,
   * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
   * sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
   * user) and page-type (all-page-types, content or non-content). You can choose between
   * daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
   * difference net sums. You can filter by editors-type (all-editor-types, anonymous,
   * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Maybe<metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
   * You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
   * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
   * 5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
   * granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end?: Maybe<metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
   * You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
   * or page-type (all-page-types, content or non-content). You can choose between daily and
   * monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * edited-pages by absolute bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
   * 100 edited-pages by edits count. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
   * non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * edited-pages by net bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
   * You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
   * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
   * 5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
   * granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end?: Maybe<metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * editors by absolute bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   * The user_text returned is either the mediawiki user_text if the user is registered, or
   * null if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
   * 100 editors by edits count. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
   * non-content). The user_text returned is either the mediawiki user_text if the user is
   * registered, or null if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
   * group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The
   * user_text returned is either the mediawiki user_text if the user is registered, or
   * "Anonymous Editor" if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day?: Maybe<metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of edits counts.
   * You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
   * page-type (all-page-types, content or non-content). You can choose between daily and
   * monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end?: Maybe<metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki project, a page-title prefixed with its canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts.
   * You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user).
   * You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end?: Maybe<metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response>;
  /**
   * Given a project and a date range, returns a timeseries of pagecounts.
   * You can filter by access site (mobile or desktop) and you can choose between monthly,
   * daily and hourly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end?: Maybe<metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response>;
  /**
   * Given a date range, returns a timeseries of pageview counts. You can filter by project,
   * access method and/or agent type. You can choose between daily and hourly granularity
   * as well.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end?: Maybe<metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response>;
  /**
   * Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
   * counts. You can also filter by access method and/or agent type.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end?: Maybe<metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response>;
  /**
   * Lists the pageviews to this project, split by country of origin for a given month.
   * Because of privacy reasons, pageviews are given in a bucketed format, and countries
   * with less than 100 views do not get reported.
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month?: Maybe<metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response>;
  /**
   * Lists the 1000 most viewed articles for a given project and timespan (month or day).
   * You can filter by access method.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day?: Maybe<metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its newly registered
   * users counts. You can choose between daily and monthly granularity. The newly registered
   * users value is computed with self-created users only, not auto-login created ones.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end?: Maybe<metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response>;
  /**
   * Given a project and a date range, returns a timeseries of unique devices counts.
   * You need to specify a project, and can filter by accessed site (mobile or desktop).
   * You can choose between daily and hourly granularity as well.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   */
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end?: Maybe<metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response>;
  /**
   * Fetches the list of language pairs the back-end service can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_languagepairs?: Maybe<cx_languagepairs>;
  /**
   * Fetches the list of tools that are available for the given pair of languages.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_pair_by_from_by_to?: Maybe<transform_list_pair_by_from_by_to_response>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_tool_by_tool?: Maybe<transform_list_tool_by_tool_response>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_tool_by_tool_by_from?: Maybe<transform_list_tool_by_tool_by_from_response>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_list_tool_by_tool_by_from_by_to?: Maybe<transform_list_tool_by_tool_by_from_by_to_response>;
  /**
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_word_from_by_from_lang_to_by_to_lang_by_word?: Maybe<transform_word_from_by_from_lang_to_by_to_lang_by_word_response>;
  /**
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider?: Maybe<transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response>;
};


export type Querymedia_math_formula_by_hashArgs = {
  hash: Scalars['NonEmptyString'];
};


export type Querymedia_math_render_by_format_by_hashArgs = {
  format: queryInput_media_math_render_by_format_by_hash_format;
  hash: Scalars['NonEmptyString'];
};


export type Querymetrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  page_title: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  granularity: queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  page_title: Scalars['String'];
  editor_type: queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  granularity: queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type;
  activity_level: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level;
  granularity: queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type;
  activity_level: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level;
  granularity: queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type;
  page_type: queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  editor_type: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type;
  page_type: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type;
  granularity: queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  page_title: Scalars['String'];
  editor_type: queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type;
  granularity: queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access_site: queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_access_site;
  granularity: queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_access;
  agent: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_agent;
  granularity: queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_access;
  agent: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_agent;
  article: Scalars['String'];
  granularity: queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_pageviews_top_by_country_by_project_by_access_by_year_by_monthArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_access;
  year: Scalars['String'];
  month: Scalars['String'];
};


export type Querymetrics_pageviews_top_by_project_by_access_by_year_by_month_by_dayArgs = {
  project: Scalars['String'];
  access: queryInput_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_access;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
};


export type Querymetrics_registered_users_new_by_project_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  granularity: queryInput_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querymetrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_endArgs = {
  project: Scalars['String'];
  access_site: queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_access_site;
  granularity: queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_granularity;
  start: Scalars['String'];
  end: Scalars['String'];
};


export type Querytransform_list_pair_by_from_by_toArgs = {
  from: Scalars['String'];
  to: Scalars['String'];
};


export type Querytransform_list_tool_by_toolArgs = {
  tool: queryInput_transform_list_tool_by_tool_tool;
};


export type Querytransform_list_tool_by_tool_by_fromArgs = {
  tool: queryInput_transform_list_tool_by_tool_by_from_tool;
  from: Scalars['String'];
};


export type Querytransform_list_tool_by_tool_by_from_by_toArgs = {
  tool: queryInput_transform_list_tool_by_tool_by_from_by_to_tool;
  from: Scalars['String'];
  to: Scalars['String'];
};


export type Querytransform_word_from_by_from_lang_to_by_to_lang_by_wordArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
  word: Scalars['String'];
};


export type Querytransform_word_from_by_from_lang_to_by_to_lang_by_word_by_providerArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
  word: Scalars['String'];
  provider: queryInput_transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_provider;
};

export type feed_availability_response = availability | problem;

export type availability = {
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  in_the_news: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  most_read: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  on_this_day: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  picture_of_the_day: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  todays_featured_article: Array<Maybe<Scalars['String']>>;
};

export type problem = {
  detail?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

/** The output format; can be svg or mml */
export type queryInput_media_math_render_by_format_by_hash_format =
  | 'svg'
  | 'mml'
  | 'png';

export type metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = absolute_bytes_difference | problem;

export type absolute_bytes_difference = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response = absolute_bytes_difference_per_page | problem;

export type absolute_bytes_difference_per_page = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = net_bytes_difference | problem;

export type net_bytes_difference = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response = net_bytes_difference_per_page | problem;

export type net_bytes_difference_per_page = {
  items?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response = edited_pages | problem;

export type edited_pages = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items = {
  activity_level?: Maybe<Scalars['String']>;
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  edited_pages?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edited-pages in content
 * namespaces) or non-content (edited-pages in non-content namespaces). If you are
 * interested in edited-pages regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
 * 25..99-edits or 100..-edits. If you are interested in edited-pages regardless
 * of their activity level, use all-activity-levels.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level =
  | 'all_activity_levels'
  | '_1__4_edits'
  | '_5__24_edits'
  | '_25__99_edits'
  | '_100___edits';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = new_pages | problem;

export type new_pages = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  new_pages?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging
 * to the bot group but having bot-like names) or user (registered account not in bot
 * group nor having bot-like name). If you are interested in edits regardless of
 * their editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (new pages in content
 * namespaces) or non-content (new pages in non-content namespaces). If you are
 * interested in new-articles regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_edited_pages_by_abs_bytes_diff | problem;

export type top_edited_pages_by_abs_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  page_title?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_edited_pages_by_edits | problem;

export type top_edited_pages_by_edits = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  edits?: Maybe<Scalars['BigInt']>;
  page_title?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_edited_pages_by_net_bytes_diff | problem;

export type top_edited_pages_by_net_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  page_title?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_response = editors | problem;

export type editors = {
  items?: Maybe<Array<Maybe<query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items = {
  activity_level?: Maybe<Scalars['String']>;
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  editors?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging
 * to the bot group but having bot-like names) or user (registered account not in bot
 * group nor having bot-like name). If you are interested in edits regardless
 * of their editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits made in content
 * namespaces) or non-content (edits made in non-content namespaces). If you are
 * interested in editors regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
 * 25..99-edits or 100..-edits. If you are interested in editors regardless
 * of their activity-level, use all-activity-levels.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_activity_level =
  | 'all_activity_levels'
  | '_1__4_edits'
  | '_5__24_edits'
  | '_25__99_edits'
  | '_100___edits';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_editors_by_abs_bytes_diff | problem;

export type top_editors_by_abs_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  abs_bytes_diff?: Maybe<Scalars['BigInt']>;
  rank?: Maybe<Scalars['Int']>;
  user_text?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_editors_by_edits | problem;

export type top_editors_by_edits = {
  items?: Maybe<Array<Maybe<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  edits?: Maybe<Scalars['BigInt']>;
  rank?: Maybe<Scalars['Int']>;
  user_text?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_response = top_editors_by_net_bytes_diff | problem;

export type top_editors_by_net_bytes_diff = {
  items?: Maybe<Array<Maybe<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items>>>;
};

export type query_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_oneOf_0_items_items_results_items_top_items = {
  net_bytes_diff?: Maybe<Scalars['BigInt']>;
  rank?: Maybe<Scalars['Int']>;
  user_text?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

export type metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_response = edits | problem;

export type edits = {
  items?: Maybe<Array<Maybe<query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  edits?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging
 * to the bot group but having bot-like names) or user (registered account not in bot
 * group nor having bot-like name). If you are interested in edits regardless
 * of their editor-type, use all-editor-types.
 */
export type queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/**
 * If you want to filter by page-type, use one of content (edits on pages in content
 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
 * interested in edits regardless of their page-type, use all-page-types.
 */
export type queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_page_type =
  | 'all_page_types'
  | 'content'
  | 'non_content';

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_response = edits_per_page | problem;

export type edits_per_page = {
  items?: Maybe<Array<Maybe<query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items = {
  editor_type?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  edits?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by editor-type, use one of anonymous, group-bot (registered
 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
 * the bot group but having bot-like names) or user (registered account not in bot group
 * nor having bot-like name). If you are interested in edits regardless of their
 * editor-type, use all-editor-types.
 */
export type queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_editor_type =
  | 'all_editor_types'
  | 'anonymous'
  | 'group_bot'
  | 'name_bot'
  | 'user';

/** Time unit for the response data. As of today, supported values are daily and monthly */
export type queryInput_metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_response = pagecounts_project | problem;

export type pagecounts_project = {
  items?: Maybe<Array<Maybe<query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access_site?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['BigInt']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

/** If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites. */
export type queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_access_site =
  | 'all_sites'
  | 'desktop_site'
  | 'mobile_site';

/**
 * The time unit for the response data. As of today, the supported granularities for
 * this endpoint are hourly, daily and monthly.
 */
export type queryInput_metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end_granularity =
  | 'hourly'
  | 'daily'
  | 'monthly';

export type metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_response = pageview_project | problem;

export type pageview_project = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
 * If you are interested in pageviews regardless of access method, use all-access.
 */
export type queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

/**
 * If you want to filter by agent type, use one of user or spider. If you are interested
 * in pageviews regardless of agent type, use all-agents.
 */
export type queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_agent =
  | 'all_agents'
  | 'user'
  | 'spider';

/**
 * The time unit for the response data. As of today, the supported granularities for this
 * endpoint are hourly, daily, and monthly.
 */
export type queryInput_metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end_granularity =
  | 'hourly'
  | 'daily'
  | 'monthly';

export type metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_response = pageview_article | problem;

export type pageview_article = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app
 * or mobile-web. If you are interested in pageviews regardless of access method,
 * use all-access.
 */
export type queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

/**
 * If you want to filter by agent type, use one of user, bot or spider. If you are
 * interested in pageviews regardless of agent type, use all-agents.
 */
export type queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_agent =
  | 'all_agents'
  | 'user'
  | 'spider'
  | 'bot';

/**
 * The time unit for the response data. As of today, the only supported granularity for
 * this endpoint is daily and monthly.
 */
export type queryInput_metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_response = by_country | problem;

export type by_country = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items>>>;
  month?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type query_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_oneOf_0_items_items_countries_items = {
  country?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
 * If you are interested in pageviews regardless of access method, use all-access.
 */
export type queryInput_metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

export type metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_response = pageview_tops | problem;

export type pageview_tops = {
  items?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items>>>;
};

export type query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items = {
  access?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items>>>;
  day?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type query_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_oneOf_0_items_items_articles_items = {
  article?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['BigInt']>;
};

/**
 * If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
 * If you are interested in pageviews regardless of access method, use all-access.
 */
export type queryInput_metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day_access =
  | 'all_access'
  | 'desktop'
  | 'mobile_app'
  | 'mobile_web';

export type metrics_registered_users_new_by_project_by_granularity_by_start_by_end_response = new_registered_users | problem;

export type new_registered_users = {
  items?: Maybe<Array<Maybe<query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items = {
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items>>>;
};

export type query_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_oneOf_0_items_items_results_items = {
  new_registered_users?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * The time unit for the response data. As of today, supported values are
 * daily and monthly.
 */
export type queryInput_metrics_registered_users_new_by_project_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_response = unique_devices | problem;

export type unique_devices = {
  items?: Maybe<Array<Maybe<query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items>>>;
};

export type query_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_oneOf_0_items_items = {
  access_site?: Maybe<Scalars['String']>;
  devices?: Maybe<Scalars['BigInt']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

/**
 * If you want to filter by accessed site, use one of desktop-site or mobile-site.
 * If you are interested in unique devices regardless of accessed site, use or all-sites.
 */
export type queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_access_site =
  | 'all_sites'
  | 'desktop_site'
  | 'mobile_site';

/**
 * The time unit for the response data. As of today, the supported granularities
 * for this endpoint are daily and monthly.
 */
export type queryInput_metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end_granularity =
  | 'daily'
  | 'monthly';

export type cx_languagepairs = {
  /** the list of available source languages */
  source?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** the list of available destination languages */
  target?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type transform_list_pair_by_from_by_to_response = cx_list_tools | problem;

export type cx_list_tools = {
  /** the list of tools available for the given language pair */
  tools?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type transform_list_tool_by_tool_response = JSON_container | problem;

export type JSON_container = {
  JSON?: Maybe<Scalars['JSON']>;
};

/** The tool category to list tools and language pairs for */
export type queryInput_transform_list_tool_by_tool_tool =
  | 'mt'
  | 'dictionary';

export type transform_list_tool_by_tool_by_from_response = JSON_container | problem;

/** The tool category to list tools and language pairs for */
export type queryInput_transform_list_tool_by_tool_by_from_tool =
  | 'mt'
  | 'dictionary';

export type transform_list_tool_by_tool_by_from_by_to_response = JSON_container | problem;

/** The tool category to list tools and language pairs for */
export type queryInput_transform_list_tool_by_tool_by_from_by_to_tool =
  | 'mt'
  | 'dictionary';

export type transform_word_from_by_from_lang_to_by_to_lang_by_word_response = cx_dict | problem;

export type cx_dict = {
  /** the original word to look up */
  source?: Maybe<Scalars['String']>;
  /** the translations found */
  translations?: Maybe<Array<Maybe<query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items>>>;
};

export type query_transform_word_from_by_from_lang_to_by_to_lang_by_word_oneOf_0_translations_items = {
  /** extra information about the phrase */
  info?: Maybe<Scalars['String']>;
  /** the translated phrase */
  phrase?: Maybe<Scalars['String']>;
  /** the source dictionary used for the translation */
  sources?: Maybe<Scalars['String']>;
};

export type transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_response = cx_dict | problem;

/** The dictionary provider id */
export type queryInput_transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider_provider =
  | 'JsonDict'
  | 'Dictd';

export type Mutation = {
  /**
   * Checks the supplied TeX formula for correctness and returns the
   * normalised formula representation as well as information about
   * identifiers. Available types are tex and inline-tex. The response
   * contains the `x-resource-location` header which can be used to retrieve
   * the render of the checked formula in one of the supported rendering
   * formats. Just append the value of the header to `/media/math/{format}/`
   * and perform a GET request against that URL.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  post_media_math_check_by_type?: Maybe<problem>;
  /**
   * Fetches the machine translation for the posted content from the source
   * to the destination language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  post_transform_html_from_by_from_lang_to_by_to_lang?: Maybe<post_transform_html_from_by_from_lang_to_by_to_lang_response>;
  /**
   * Fetches the machine translation for the posted content from the source
   * to the destination language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider?: Maybe<post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response>;
};


export type Mutationpost_media_math_check_by_typeArgs = {
  type: mutationInput_post_media_math_check_by_type_type;
};


export type Mutationpost_transform_html_from_by_from_lang_to_by_to_langArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
};


export type Mutationpost_transform_html_from_by_from_lang_to_by_to_lang_by_providerArgs = {
  from_lang: Scalars['String'];
  to_lang: Scalars['String'];
  provider: mutationInput_post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_provider;
};

/** The input type of the given formula; can be tex or inline-tex */
export type mutationInput_post_media_math_check_by_type_type =
  | 'tex'
  | 'inline_tex'
  | 'chem';

export type post_transform_html_from_by_from_lang_to_by_to_lang_response = cx_mt | problem;

export type cx_mt = {
  /** the translated content */
  contents?: Maybe<Scalars['String']>;
};

export type post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_response = cx_mt | problem;

/** The machine translation provider id */
export type mutationInput_post_transform_html_from_by_from_lang_to_by_to_lang_by_provider_provider =
  | 'Apertium'
  | 'Yandex'
  | 'Youdao';

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** Gets availability of featured feed content for the apps by wiki domain.

Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
 **/
  feed_availability: InContextSdkMethod<Query['feed_availability'], {}, MeshContext>,
  /** Returns the previously-stored formula via `/media/math/check/{type}` for
the given hash.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
 **/
  media_math_formula_by_hash: InContextSdkMethod<Query['media_math_formula_by_hash'], Querymedia_math_formula_by_hashArgs, MeshContext>,
  /** Given a request hash, renders a TeX formula into its mathematic
representation in the given format. When a request is issued to the
`/media/math/check/{format}` POST endpoint, the response contains the
`x-resource-location` header denoting the hash ID of the POST data. Once
obtained, this endpoint has to be used to obtain the actual render.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
 **/
  media_math_render_by_format_by_hash: InContextSdkMethod<Query['media_math_render_by_format_by_hash'], Querymedia_math_render_by_format_by_hashArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
name-bot, user) and page-type (all-page-types, content, non-content). You can choose
between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end'], Querymetrics_bytes_difference_absolute_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project, a page-title prefixed with canonical namespace (for
instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
difference absolute sums. You can filter by editors-type (all-editor-types, anonymous,
group-bot, name-bot, user). You can choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end'], Querymetrics_bytes_difference_absolute_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
user) and page-type (all-page-types, content or non-content). You can choose between
daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end'], Querymetrics_bytes_difference_net_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project, a page-title prefixed with canonical namespace (for
instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
difference net sums. You can filter by editors-type (all-editor-types, anonymous,
group-bot, name-bot, user). You can choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end'], Querymetrics_bytes_difference_net_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end'], Querymetrics_edited_pages_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
or page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end'], Querymetrics_edited_pages_new_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
edited-pages by absolute bytes-difference. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day'], Querymetrics_edited_pages_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date (day or month), returns a timeseries of the top
100 edited-pages by edits count. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
non-content).

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day'], Querymetrics_edited_pages_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
edited-pages by net bytes-difference. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day'], Querymetrics_edited_pages_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_end'], Querymetrics_editors_aggregate_by_project_by_editor_type_by_page_type_by_activity_level_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
editors by absolute bytes-difference. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
The user_text returned is either the mediawiki user_text if the user is registered, or
null if user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day'], Querymetrics_editors_top_by_absolute_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date (day or month), returns a timeseries of the top
100 editors by edits count. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
non-content). The user_text returned is either the mediawiki user_text if the user is
registered, or null if user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_day'], Querymetrics_editors_top_by_edits_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The
user_text returned is either the mediawiki user_text if the user is registered, or
"Anonymous Editor" if user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_day'], Querymetrics_editors_top_by_net_bytes_difference_by_project_by_editor_type_by_page_type_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of edits counts.
You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_end'], Querymetrics_edits_aggregate_by_project_by_editor_type_by_page_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki project, a page-title prefixed with its canonical namespace (for
instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts.
You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user).
You can choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_end'], Querymetrics_edits_per_page_by_project_by_page_title_by_editor_type_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a project and a date range, returns a timeseries of pagecounts.
You can filter by access site (mobile or desktop) and you can choose between monthly,
daily and hourly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_end'], Querymetrics_legacy_pagecounts_aggregate_by_project_by_access_site_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a date range, returns a timeseries of pageview counts. You can filter by project,
access method and/or agent type. You can choose between daily and hourly granularity
as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_end'], Querymetrics_pageviews_aggregate_by_project_by_access_by_agent_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
counts. You can also filter by access method and/or agent type.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_end'], Querymetrics_pageviews_per_article_by_project_by_access_by_agent_by_article_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Lists the pageviews to this project, split by country of origin for a given month.
Because of privacy reasons, pageviews are given in a bucketed format, and countries
with less than 100 views do not get reported.
Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month: InContextSdkMethod<Query['metrics_pageviews_top_by_country_by_project_by_access_by_year_by_month'], Querymetrics_pageviews_top_by_country_by_project_by_access_by_year_by_monthArgs, MeshContext>,
  /** Lists the 1000 most viewed articles for a given project and timespan (month or day).
You can filter by access method.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day: InContextSdkMethod<Query['metrics_pageviews_top_by_project_by_access_by_year_by_month_by_day'], Querymetrics_pageviews_top_by_project_by_access_by_year_by_month_by_dayArgs, MeshContext>,
  /** Given a Mediawiki project and a date range, returns a timeseries of its newly registered
users counts. You can choose between daily and monthly granularity. The newly registered
users value is computed with self-created users only, not auto-login created ones.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_registered_users_new_by_project_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_registered_users_new_by_project_by_granularity_by_start_by_end'], Querymetrics_registered_users_new_by_project_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Given a project and a date range, returns a timeseries of unique devices counts.
You need to specify a project, and can filter by accessed site (mobile or desktop).
You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
 **/
  metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end: InContextSdkMethod<Query['metrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_end'], Querymetrics_unique_devices_by_project_by_access_site_by_granularity_by_start_by_endArgs, MeshContext>,
  /** Fetches the list of language pairs the back-end service can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_list_languagepairs: InContextSdkMethod<Query['transform_list_languagepairs'], {}, MeshContext>,
  /** Fetches the list of tools that are available for the given pair of languages.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_list_pair_by_from_by_to: InContextSdkMethod<Query['transform_list_pair_by_from_by_to'], Querytransform_list_pair_by_from_by_toArgs, MeshContext>,
  /** Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_list_tool_by_tool: InContextSdkMethod<Query['transform_list_tool_by_tool'], Querytransform_list_tool_by_toolArgs, MeshContext>,
  /** Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_list_tool_by_tool_by_from: InContextSdkMethod<Query['transform_list_tool_by_tool_by_from'], Querytransform_list_tool_by_tool_by_fromArgs, MeshContext>,
  /** Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_list_tool_by_tool_by_from_by_to: InContextSdkMethod<Query['transform_list_tool_by_tool_by_from_by_to'], Querytransform_list_tool_by_tool_by_from_by_toArgs, MeshContext>,
  /** Fetches the dictionary meaning of a word from a language and displays
it in the target language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_word_from_by_from_lang_to_by_to_lang_by_word: InContextSdkMethod<Query['transform_word_from_by_from_lang_to_by_to_lang_by_word'], Querytransform_word_from_by_from_lang_to_by_to_lang_by_wordArgs, MeshContext>,
  /** Fetches the dictionary meaning of a word from a language and displays
it in the target language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider: InContextSdkMethod<Query['transform_word_from_by_from_lang_to_by_to_lang_by_word_by_provider'], Querytransform_word_from_by_from_lang_to_by_to_lang_by_word_by_providerArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Checks the supplied TeX formula for correctness and returns the
normalised formula representation as well as information about
identifiers. Available types are tex and inline-tex. The response
contains the `x-resource-location` header which can be used to retrieve
the render of the checked formula in one of the supported rendering
formats. Just append the value of the header to `/media/math/{format}/`
and perform a GET request against that URL.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
 **/
  post_media_math_check_by_type: InContextSdkMethod<Mutation['post_media_math_check_by_type'], Mutationpost_media_math_check_by_typeArgs, MeshContext>,
  /** Fetches the machine translation for the posted content from the source
to the destination language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  post_transform_html_from_by_from_lang_to_by_to_lang: InContextSdkMethod<Mutation['post_transform_html_from_by_from_lang_to_by_to_lang'], Mutationpost_transform_html_from_by_from_lang_to_by_to_langArgs, MeshContext>,
  /** Fetches the machine translation for the posted content from the source
to the destination language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
 **/
  post_transform_html_from_by_from_lang_to_by_to_lang_by_provider: InContextSdkMethod<Mutation['post_transform_html_from_by_from_lang_to_by_to_lang_by_provider'], Mutationpost_transform_html_from_by_from_lang_to_by_to_lang_by_providerArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Wiki"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
