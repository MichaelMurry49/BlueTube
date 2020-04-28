class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, :created_at, :updated_at, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 8, allow_nil: true}
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :videos,
        foreign_key: :author_id,
        class_name: :Video

    # SPIRE
    def self.find_by_user_credentials(username, password)
        username = User.find_by(username: username)
        if(username)
            return username.is_password?(password) ? username : nil
        else
            return nil;
        end
    end

    def password=(password)
        @password = password;
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
