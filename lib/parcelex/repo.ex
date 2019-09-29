defmodule Parcelex.Repo do
  use Ecto.Repo,
    otp_app: :parcelex,
    adapter: Ecto.Adapters.Postgres
end
